import { Meta, Story } from '@storybook/react';
import React from 'react';

import DiagnosticImagingTechnician from '.';

export default {
  title: 'Components/templates/DiagnosticImagingTechnician',
  component: DiagnosticImagingTechnician,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <DiagnosticImagingTechnician
    title="Kỹ thuật viên chuẩn đoán hình ảnh"
    description={` Nhiệm vụ 1: Kiểm toán quy trình hoạt động chung của Tập đoàn
                <br>
                1.1 Thực hiện chương trình kiểm toán theo khung Kiểm toán nội bộ, bao gồm quy trình Kiểm toán nội bộ và các chuẩn mực khác liên quan đến việc thực hiện công việc kiểm toán nội bộ.
                <br>
                1.2 Thảo luận các phát hiện và khuyến nghị sơ bộ.
                <br>
                1.3 Đánh giá hiệu quả hoạt động của Tập đoàn, bao gồm các hoạt động quản lý rủi ro (nhận diện, đánh giá và quản lý rủi ro).
                <br>
                1.4 Triển khai kiểm tra việc thực hiện kế hoạch hành động đã nhất trí trong báo cáo kiểm toán nội bộ nhằm đảm bảo kế hoạch hành động được thực thi một cách thích hợp.
                <br>
                Nhiệm vụ 2: Thực hiện tư vấn cho các khối/phòng ban khác các vấn đề về quản trị doanh nghiệp, hệ thống báo cáo quản trị, tuân thủ và rủi ro.
                <br>
                Nhiệm vụ 3: Hỗ trợ cập nhật các mẫu hồ sơ kiểm toán nội bộ.
                <br>
                Nhiệm vụ 4: Thực hiện các nhiệm vụ khác theo yêu cầu của cấp trên."`}
  />
);
