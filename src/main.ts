import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 2. ตั้งค่า Configuration สำหรับ Swagger
  const config = new DocumentBuilder()
    .setTitle('My API Name')
    .setDescription('รายละเอียด API ของฉัน')
    .setVersion('1.0')
    .addTag('users') // เพิ่ม Tag สำหรับจัดกลุ่ม (เลือกใส่หรือไม่ก็ได้)
    .build();

  // 3. สร้างเอกสาร (Document)
  const document = SwaggerModule.createDocument(app, config);

  // 4. สั่งให้รันหน้า UI ที่ Path ไหน (ในที่นี้คือ 'api')
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();