'use client'

import React, { useState } from 'react'
import {
  Typography,
  Input,
  Button,
  Row,
  Col,
  Upload,
  Spin,
  List,
  Avatar,
} from 'antd'
import { AudioOutlined, SendOutlined, SearchOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { TextArea } = Input
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [question, setQuestion] = useState<string>('')
  const [answers, setAnswers] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [fileList, setFileList] = useState<any[]>([])

  const handleQuestionSubmit = async () => {
    if (!question.trim()) {
      enqueueSnackbar('Please enter a question', { variant: 'error' })
      return
    }

    setLoading(true)
    try {
      const aiResponse = await Api.Ai.chat(question)
      setAnswers([...answers, aiResponse])
      setQuestion('')
    } catch (error) {
      enqueueSnackbar('Failed to get AI response', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const handleVoiceUpload = async (options: any) => {
    const { file } = options
    setLoading(true)
    try {
      const url = await Api.Upload.upload(file)
      const transcribedText = await Api.Ai.fromAudioToText(url)
      setQuestion(transcribedText)
    } catch (error) {
      enqueueSnackbar('Failed to transcribe audio', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const handleTextToVoice = async (text: string) => {
    setLoading(true)
    try {
      const audioUrl = await Api.Ai.fromTextToAudio(text)
      const audio = new Audio(audioUrl)
      audio.play()
    } catch (error) {
      enqueueSnackbar('Failed to convert text to audio', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>AI Question and Answer</Title>
      <Paragraph>
        Type your question or use voice commands to interact with the AI and
        receive responses.
      </Paragraph>
      <Row justify="center" gutter={[16, 16]}>
        <Col span={24}>
          <TextArea
            rows={4}
            value={question}
            onChange={e => setQuestion(e.target.value)}
            placeholder="Type your question here..."
          />
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleQuestionSubmit}
            loading={loading}
            block
          >
            Submit
          </Button>
        </Col>
        <Col span={24}>
          <Upload
            fileList={fileList}
            customRequest={handleVoiceUpload}
            maxCount={1}
            showUploadList={false}
          >
            <Button icon={<AudioOutlined />} block>
              Upload Voice Command
            </Button>
          </Upload>
        </Col>
      </Row>
      <Spin spinning={loading}>
        <List
          itemLayout="horizontal"
          dataSource={answers}
          renderItem={(answer, index) => (
            <List.Item
              actions={[
                <Button
                  icon={<AudioOutlined />}
                  onClick={() => handleTextToVoice(answer)}
                >
                  Listen
                </Button>,
                <Button
                  icon={<SearchOutlined />}
                  onClick={() =>
                    window.open(
                      `https://www.google.com/search?q=${encodeURIComponent(answer)}`,
                      '_blank',
                    )
                  }
                >
                  Search Online
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar icon={<AudioOutlined />} />}
                title={`Answer ${index + 1}`}
                description={answer}
              />
            </List.Item>
          )}
        />
      </Spin>
    </PageLayout>
  )
}
