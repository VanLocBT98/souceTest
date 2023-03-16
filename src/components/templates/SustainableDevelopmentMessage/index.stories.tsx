import { Story, Meta } from '@storybook/react';
import React from 'react';

import SustainableDevelopmentMessage from '.';

export default {
  title: 'Components/templates/SustainableDevelopmentMessage',
  component: SustainableDevelopmentMessage,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <SustainableDevelopmentMessage
    title="Thông điệp phát triển bền vững"
    content={`
      Mỗi một quốc gia đều có những thương hiệu biểu tượng cho sự hùng mạnh của Quốc gia đó. NovaGroup với khát vọng là thương hiệu Việt trong lĩnh vực Bất động sản, Dịch vụ và Tiêu dùng, vươn xa toàn cầu.
      <br />
      <br />
      Muốn làm được điều này đòi hỏi NovaGroup phải nỗ lực, kiên định với mục tiêu. NovaGroup thấu hiểu, sự thành công không đến từ chiếc đũa thần cũng như NovaGroup không thể một mình vượt qua tất cả mọi thách thức. Chúng tôi cần sự đoàn kết từ nội bộ NovaGroup và sự hậu thuẫn của xã hội để tạo nên sức mạnh.
      <br />
      <br />
      Muốn có sự đoàn kết, chúng ta cần phải có chung một nét văn hóa. Đối với NovaGroup, Hiệu quả - Chính trực - Chuyên nghiệp là nét văn hóa đặc thù, là Giá trị cốt lõi của những con người Nova.
      <br />
      <br />
      Đối với ngoài xã hội, song song với hoạt động kinh doanh hiệu quả, NovaGroup phải tuân thủ pháp luật, bảo vệ môi trường, ý thức thực hiện trách nhiệm xã hội bằng sự tận tâm, chân thành.
      <br />
      <br />
      NovaGroup không muốn và không bao giờ bị cuốn vào những lợi ích trước mắt. Chính vì vậy, Tập đoàn luôn đẩy mạnh thực hiện những kế hoạch lâu dài về xây dựng thương hiệu NovaGroup, ý thức phục vụ khách hàng bằng tất cả sự tận tâm; luôn đặt lợi ích của khách hàng và cộng đồng trong tất cả những hoạt động kinh doanh của mình.
      <br />
      <br />
      Trong quá trình phát triển bền vững, với Giá trị cốt lõi: Hiệu quả - Chính trực - Chuyên nghiệp, NovaGroup mong muốn nhận được sự đồng hành của khách hàng và cộng đồng. Sự hỗ trợ, giám sát, phản hồi của khách hàng và cộng đồng trực tiếp qua số điện thoại: 1900 636666; Email: Info@novagroup.vn sẽ giúp chúng tôi điều chỉnh, phát triển đúng hướng, thực hiện tốt hơn lộ trình phát triển bền vững, đóng góp nhiều hơn cho nền kinh tế, cho cộng đồng.
      <br />
      <br />
      NovaGroup xin gửi lời cảm ơn sâu sắc nhất đến khách hàng và cộng đồng đã ủng hộ và hợp tác cùng chúng tôi.
      <br />
      <br />
      <span style="text-align: center; display: inline-block">
      Kính chúc Quý vị sức khỏe và thành công!
      <br />
      <b>NOVASERVICE GROUP</b>
      </span>
    `}
  />
);
