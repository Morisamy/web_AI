import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('064ed91d-0fe6-48c0-8b09-ec80695cc54f', '1Christa6@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'cus_12345', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('e1576ecd-999e-45bd-9ffe-4c7044799324', '8Gussie61@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=10', 'cus_11121', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('78d41001-652b-4216-ab59-4b76db29dc7b', '15Dangelo4@hotmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=17', 'cus_31415', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('b3d68683-0934-4ecc-adfb-400c3c8020a2', '22Sonia_Langosh@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=24', 'cus_12345', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('524561cf-1067-4aca-930d-b642da48c3de', '29Pascale.Armstrong1@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=31', 'cus_16171', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('4795837f-f464-4811-8410-e23b13bd7862', '36Trudie91@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=38', 'cus_67890', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('135b2150-0fb9-4b51-8bfc-c10a5ce581fc', '43Cristina_Hyatt47@yahoo.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=45', 'cus_11121', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('7129a0c6-9eab-44fd-b460-fee2b4a5cb8d', '50Alisha32@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=52', 'cus_67890', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('6d5b449f-1845-47f0-bd93-7d69230ff348', '57Antonia.Kemmer@hotmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=59', 'cus_67890', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('5f173126-7755-4459-8358-2d13c65b8822', 'Scheduled Maintenance', 'Here is your weekly newsletter with the latest updates.', 'Admin Team', '74Joaquin.Miller@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=75', 'https://i.imgur.com/YfJQV5z.png?id=76', '524561cf-1067-4aca-930d-b642da48c3de');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('042edd0f-e816-4b4d-acca-2f57e98f499c', 'System Update', 'Here is your weekly newsletter with the latest updates.', 'Newsletter Team', '81Wilford.Larkin@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=82', 'https://i.imgur.com/YfJQV5z.png?id=83', '064ed91d-0fe6-48c0-8b09-ec80695cc54f');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('c4277826-e6aa-4156-b33e-56535fe5d8b7', 'Security Alert', 'Here is your weekly newsletter with the latest updates.', 'Security Team', '88Delaney_Stroman@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=89', 'https://i.imgur.com/YfJQV5z.png?id=90', 'e1576ecd-999e-45bd-9ffe-4c7044799324');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('8493295e-ed39-4a6a-9ef4-1823a393c8a5', 'New Feature Release', 'Our system will undergo maintenance this weekend.', 'Support', '95Adrianna.Little98@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=96', 'https://i.imgur.com/YfJQV5z.png?id=97', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('6b120a11-8f38-4798-8ca8-c642228a6581', 'System Update', 'Please be aware of a recent security update.', 'Newsletter Team', '102Jacquelyn94@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=103', 'https://i.imgur.com/YfJQV5z.png?id=104', 'b3d68683-0934-4ecc-adfb-400c3c8020a2');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('643a88b6-72c7-48c8-a69b-886842e003f9', 'Weekly Newsletter', 'Please be aware of a recent security update.', 'Admin Team', '109Wava.Bernhard@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=110', 'https://i.imgur.com/YfJQV5z.png?id=111', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('4a0baac2-c34a-4abd-902a-1bdc4791e2c0', 'Scheduled Maintenance', 'Please be aware of a recent security update.', 'Admin Team', '116Maybell.McCullough@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=117', 'https://i.imgur.com/YfJQV5z.png?id=118', '135b2150-0fb9-4b51-8bfc-c10a5ce581fc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('108636fa-9e0b-4cec-9f50-6182ddb446bd', 'New Feature Release', 'Please be aware of a recent security update.', 'Security Team', '123Emmy.Hettinger@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=124', 'https://i.imgur.com/YfJQV5z.png?id=125', '524561cf-1067-4aca-930d-b642da48c3de');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('0f00a6c5-dcd7-437f-8122-b9eb967d8b72', 'New Feature Release', 'Please be aware of a recent security update.', 'IT Department', '130Korbin_Crona57@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=131', 'https://i.imgur.com/YfJQV5z.png?id=132', '4795837f-f464-4811-8410-e23b13bd7862');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('9e933b70-2d30-4ba8-8246-bf48fcca3183', 'Weekly Newsletter', 'Check out the new features weve just released', 'Admin Team', '137Leora.Welch@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=138', 'https://i.imgur.com/YfJQV5z.png?id=139', 'b3d68683-0934-4ecc-adfb-400c3c8020a2');

INSERT INTO "question" ("id", "content", "userId") VALUES ('f5ac4797-da33-407e-bc40-393f17a607b1', 'How does photosynthesis work', '4795837f-f464-4811-8410-e23b13bd7862');
INSERT INTO "question" ("id", "content", "userId") VALUES ('6a489c74-4379-4b71-a808-da41c2fe4a6b', 'What are the benefits of a balanced diet', '6d5b449f-1845-47f0-bd93-7d69230ff348');
INSERT INTO "question" ("id", "content", "userId") VALUES ('a98f810e-0c28-4b3f-93c6-882605974005', 'What is the capital of France', '6d5b449f-1845-47f0-bd93-7d69230ff348');
INSERT INTO "question" ("id", "content", "userId") VALUES ('79aea5f9-ef29-4948-b65e-878c1f6f8832', 'Can you explain the theory of relativity', '135b2150-0fb9-4b51-8bfc-c10a5ce581fc');
INSERT INTO "question" ("id", "content", "userId") VALUES ('5ae5452e-21f1-408b-8d78-00026f34900f', 'Who wrote To Kill a Mockingbird', 'b3d68683-0934-4ecc-adfb-400c3c8020a2');
INSERT INTO "question" ("id", "content", "userId") VALUES ('516fbacf-09fd-4669-80e8-c7e705e3de23', 'What is the capital of France', '524561cf-1067-4aca-930d-b642da48c3de');
INSERT INTO "question" ("id", "content", "userId") VALUES ('999a1593-f461-476e-a48b-b6938e6a795b', 'How does photosynthesis work', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "question" ("id", "content", "userId") VALUES ('9a03d104-7500-4021-9e7d-da1f53819327', 'What are the benefits of a balanced diet', '064ed91d-0fe6-48c0-8b09-ec80695cc54f');
INSERT INTO "question" ("id", "content", "userId") VALUES ('68c70974-7c1b-407a-aadc-fe05fc6caa2f', 'What are the benefits of a balanced diet', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "question" ("id", "content", "userId") VALUES ('747cf1f0-c9b8-42b5-9a17-75f1a12f04a0', 'What are the benefits of a balanced diet', '4795837f-f464-4811-8410-e23b13bd7862');

INSERT INTO "answer" ("id", "content", "source", "questionId") VALUES ('d17c167f-c542-4ecf-bdd1-ced635d2e65f', 'The capital of France is Paris.', 'Wikipedia', '516fbacf-09fd-4669-80e8-c7e705e3de23');
INSERT INTO "answer" ("id", "content", "source", "questionId") VALUES ('ea53ccd0-1067-461e-83d6-2c0065ac0afd', 'The capital of France is Paris.', 'Medical News Today', 'f5ac4797-da33-407e-bc40-393f17a607b1');
INSERT INTO "answer" ("id", "content", "source", "questionId") VALUES ('7270681a-b683-4daf-a960-0b443859defa', 'Water boils at 100 degrees Celsius.', 'Wikipedia', '9a03d104-7500-4021-9e7d-da1f53819327');
INSERT INTO "answer" ("id", "content", "source", "questionId") VALUES ('91db0f5f-15ca-4488-b946-b6256d874c76', 'The capital of France is Paris.', 'National Geographic', '5ae5452e-21f1-408b-8d78-00026f34900f');
INSERT INTO "answer" ("id", "content", "source", "questionId") VALUES ('11632a5d-37c7-4a61-851d-544a2be2f40a', 'Water boils at 100 degrees Celsius.', 'Wikipedia', '5ae5452e-21f1-408b-8d78-00026f34900f');
INSERT INTO "answer" ("id", "content", "source", "questionId") VALUES ('c881c9d5-bdca-4961-8614-ff8d1d5e54e5', 'Water boils at 100 degrees Celsius.', 'National Geographic', '5ae5452e-21f1-408b-8d78-00026f34900f');
INSERT INTO "answer" ("id", "content", "source", "questionId") VALUES ('9ac8a8ed-5aa4-439e-bf7f-5a4a06adfc88', 'Python is a popular programming language.', 'National Geographic', '68c70974-7c1b-407a-aadc-fe05fc6caa2f');
INSERT INTO "answer" ("id", "content", "source", "questionId") VALUES ('0bbc059b-2658-4a52-87a5-9adc8c9baa30', 'Water boils at 100 degrees Celsius.', 'Stack Overflow', 'a98f810e-0c28-4b3f-93c6-882605974005');
INSERT INTO "answer" ("id", "content", "source", "questionId") VALUES ('46773ce8-022b-4cb4-8e93-23cd3ab582f6', 'Python is a popular programming language.', 'Britannica', 'a98f810e-0c28-4b3f-93c6-882605974005');
INSERT INTO "answer" ("id", "content", "source", "questionId") VALUES ('84a9e443-c25a-4e36-adb0-45331b656ab7', 'Python is a popular programming language.', 'Britannica', '79aea5f9-ef29-4948-b65e-878c1f6f8832');

INSERT INTO "voice_command" ("id", "command", "userId") VALUES ('09bc2c2b-f6e6-4179-a254-02d5cd58cc9d', 'Remind me to call mom at 5 PM.', 'e1576ecd-999e-45bd-9ffe-4c7044799324');
INSERT INTO "voice_command" ("id", "command", "userId") VALUES ('0de6d27d-ba71-43bc-abc6-f69bf48a0adb', 'Play my favorite song.', '135b2150-0fb9-4b51-8bfc-c10a5ce581fc');
INSERT INTO "voice_command" ("id", "command", "userId") VALUES ('ad70ac43-08fb-4780-9272-f5cc9824fe0c', 'Whats the weather like today', '6d5b449f-1845-47f0-bd93-7d69230ff348');
INSERT INTO "voice_command" ("id", "command", "userId") VALUES ('de300722-0748-4a68-a38c-ae9c30631cf9', 'Turn off the living room lights.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "voice_command" ("id", "command", "userId") VALUES ('b2547c5b-ab22-448c-ae46-73f6d2f522c1', 'Set a timer for 10 minutes.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "voice_command" ("id", "command", "userId") VALUES ('ce164207-9be8-4732-b1bd-a6a9a4d16191', 'Remind me to call mom at 5 PM.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "voice_command" ("id", "command", "userId") VALUES ('1028e91d-f3f2-4399-b947-c4e29faa4ac6', 'Whats the weather like today', '064ed91d-0fe6-48c0-8b09-ec80695cc54f');
INSERT INTO "voice_command" ("id", "command", "userId") VALUES ('c8786e2f-0d93-4018-9ee0-49e917dddec2', 'Turn off the living room lights.', '524561cf-1067-4aca-930d-b642da48c3de');
INSERT INTO "voice_command" ("id", "command", "userId") VALUES ('8a353abb-0642-4bdf-aae6-96d02c84f463', 'Set a timer for 10 minutes.', '524561cf-1067-4aca-930d-b642da48c3de');
INSERT INTO "voice_command" ("id", "command", "userId") VALUES ('cdb237b6-f64e-41b3-a690-cd09fe0b325d', 'Remind me to call mom at 5 PM.', '78d41001-652b-4216-ab59-4b76db29dc7b');

INSERT INTO "voice_response" ("id", "response", "answerId") VALUES ('ca6b6c0f-349e-45e9-8b0a-022d2585cbfe', 'Heres what I found on the topic.', '9ac8a8ed-5aa4-439e-bf7f-5a4a06adfc88');
INSERT INTO "voice_response" ("id", "response", "answerId") VALUES ('513b92d1-6917-4158-a9eb-ebf59435245c', 'Heres what I found on the topic.', '7270681a-b683-4daf-a960-0b443859defa');
INSERT INTO "voice_response" ("id", "response", "answerId") VALUES ('7a8ba89a-4b39-4f7f-8793-2bd9e1a3890a', 'Please wait a moment while I search for the answer.', '7270681a-b683-4daf-a960-0b443859defa');
INSERT INTO "voice_response" ("id", "response", "answerId") VALUES ('19e65220-fc31-4cc8-b44b-924aaed67e7d', 'Im sorry I dont have enough information to answer that.', '11632a5d-37c7-4a61-851d-544a2be2f40a');
INSERT INTO "voice_response" ("id", "response", "answerId") VALUES ('f622237b-ad83-4df4-92e3-0c8787038c16', 'Can you please provide more details', 'd17c167f-c542-4ecf-bdd1-ced635d2e65f');
INSERT INTO "voice_response" ("id", "response", "answerId") VALUES ('05aaa125-0fb3-4c9f-91ca-c58a3b1531e7', 'Please wait a moment while I search for the answer.', '46773ce8-022b-4cb4-8e93-23cd3ab582f6');
INSERT INTO "voice_response" ("id", "response", "answerId") VALUES ('5761a449-1af0-418b-be3f-e84beca6f371', 'Heres what I found on the topic.', '46773ce8-022b-4cb4-8e93-23cd3ab582f6');
INSERT INTO "voice_response" ("id", "response", "answerId") VALUES ('185993c6-af3a-48ab-ad01-eb750889ca88', 'Heres what I found on the topic.', '84a9e443-c25a-4e36-adb0-45331b656ab7');
INSERT INTO "voice_response" ("id", "response", "answerId") VALUES ('3cdb5fb9-22e0-4a87-8d93-e06d29944ce1', 'Can you please provide more details', '84a9e443-c25a-4e36-adb0-45331b656ab7');
INSERT INTO "voice_response" ("id", "response", "answerId") VALUES ('e938fb0c-f051-45d9-84cf-afafd00b771e', 'Sure I can help you with that.', 'c881c9d5-bdca-4961-8614-ff8d1d5e54e5');

INSERT INTO "admin" ("id", "email", "password") VALUES ('b2660716-11b3-4ec5-b1c3-ae1dbc667d33', '231Emerald21@yahoo.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "admin" ("id", "email", "password") VALUES ('8426d73f-85d5-43a1-9935-b32a06a3e1d8', '234Amya_McCullough33@yahoo.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "admin" ("id", "email", "password") VALUES ('228ed711-8f3f-4120-9ca7-d19839e35bf2', '237Kyla19@gmail.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "admin" ("id", "email", "password") VALUES ('1a9af569-5656-44e3-92cd-54ef4757e980', '240Laury41@hotmail.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "admin" ("id", "email", "password") VALUES ('6c792077-eba7-4e0d-b06d-0460acabc22d', '243Rudolph57@yahoo.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "admin" ("id", "email", "password") VALUES ('cf61fee4-7fd8-483a-a62d-50022b6694b2', '246Gabrielle_Adams75@yahoo.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "admin" ("id", "email", "password") VALUES ('74454672-2319-47cf-844b-808a0afda4a8', '249Garnet_Kertzmann@hotmail.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "admin" ("id", "email", "password") VALUES ('053dde7b-e236-4d1f-9b82-d9e34443c5e8', '252Kariane7@hotmail.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "admin" ("id", "email", "password") VALUES ('1c2d8338-30f2-41f0-a97e-3cfb496516da', '255Ephraim37@yahoo.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "admin" ("id", "email", "password") VALUES ('a648c7c3-5630-4c37-adea-7a1392109045', '258Fletcher58@yahoo.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "training_data" ("id", "data", "adminId") VALUES ('a8ef8350-497d-47b3-8d74-252d6ae3c645', 'The Great Wall of China is visible from space.', '053dde7b-e236-4d1f-9b82-d9e34443c5e8');
INSERT INTO "training_data" ("id", "data", "adminId") VALUES ('5f7d84ef-e6a3-4055-8801-fb62ce8c3191', 'Water freezes at 0 degrees Celsius.', '6c792077-eba7-4e0d-b06d-0460acabc22d');
INSERT INTO "training_data" ("id", "data", "adminId") VALUES ('58c8ed12-2ff6-4279-ab7f-cd540b1db87d', 'The human body has 206 bones.', 'cf61fee4-7fd8-483a-a62d-50022b6694b2');
INSERT INTO "training_data" ("id", "data", "adminId") VALUES ('38643f56-b9cd-4b84-8dcd-6e70ee2033c9', 'The capital of France is Paris.', '053dde7b-e236-4d1f-9b82-d9e34443c5e8');
INSERT INTO "training_data" ("id", "data", "adminId") VALUES ('f2bda3ff-edb1-47ce-8d0a-b586b47eda97', 'Python is a popular programming language.', 'cf61fee4-7fd8-483a-a62d-50022b6694b2');
INSERT INTO "training_data" ("id", "data", "adminId") VALUES ('bedf1bda-fa61-4961-9496-38fca055e158', 'Water freezes at 0 degrees Celsius.', '228ed711-8f3f-4120-9ca7-d19839e35bf2');
INSERT INTO "training_data" ("id", "data", "adminId") VALUES ('a9c2888a-51a2-4241-981f-46f509d26bbf', 'The Great Wall of China is visible from space.', '228ed711-8f3f-4120-9ca7-d19839e35bf2');
INSERT INTO "training_data" ("id", "data", "adminId") VALUES ('c4a824aa-08f5-4be4-8d3c-d51a3a0dec6a', 'The capital of France is Paris.', 'b2660716-11b3-4ec5-b1c3-ae1dbc667d33');
INSERT INTO "training_data" ("id", "data", "adminId") VALUES ('f365678c-1d96-4288-b9f6-57c97eb3e03c', 'The capital of France is Paris.', 'b2660716-11b3-4ec5-b1c3-ae1dbc667d33');
INSERT INTO "training_data" ("id", "data", "adminId") VALUES ('d92331af-33fc-4bba-91be-09a24deb69dd', 'The capital of France is Paris.', '6c792077-eba7-4e0d-b06d-0460acabc22d');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
