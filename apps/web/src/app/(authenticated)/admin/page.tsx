'use client'

import { useState } from 'react'
import { Typography, Upload, Button, Form, Input, Row, Col } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AdminPanelPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [fileList, setFileList] = useState([])

  const handleUpload = async options => {
    const { file } = options
    try {
      const url = await Api.Upload.upload(file)
      setFileList(fileList => [...fileList, { url: url, status: 'done' }])
      enqueueSnackbar('File uploaded successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('File upload failed', { variant: 'error' })
    }
  }

  const handleSubmit = async values => {
    try {
      await Api.TrainingData.createOneByAdminId(userId, { data: values.data })
      enqueueSnackbar('Training data submitted successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to submit training data', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Admin Panel</Title>
      <Paragraph>
        Manage the AI model and training data from this panel.
      </Paragraph>

      <Row gutter={16}>
        <Col span={24}>
          <Title level={4}>Upload Training Data</Title>
          <Upload fileList={fileList} customRequest={handleUpload} maxCount={1}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: '20px' }}>
        <Col span={24}>
          <Title level={4}>Input Training Data</Title>
          <Form onFinish={handleSubmit}>
            <Form.Item
              name="data"
              rules={[
                { required: true, message: 'Please input training data' },
              ]}
            >
              <Input.TextArea rows={4} placeholder="Enter training data here" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
