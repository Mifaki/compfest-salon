import { Button, Divider } from 'antd';
import WhatsappIcon from '../icon/WhatsaapIcon';

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-sea-gray py-20">
      <div className="space-y-5">
        <h3 className="text-heading-2 font-semibold text-sea-brown">
          Let The Work Do The Talking
        </h3>
        <Divider />
        <div className="flex items-center gap-5">
          <Button
            icon={<WhatsappIcon />}
            className="h-12 w-full flex-1 rounded-none border-2 border-sea-brown bg-sea-gray px-6 py-3 text-body-2 font-medium text-sea-brown"
          >
            08123456789
          </Button>
          <Button
            icon={<WhatsappIcon />}
            className="h-12 w-full flex-1 rounded-none border-2 border-sea-brown bg-sea-gray px-6 py-3 text-body-2 font-medium text-sea-brown"
          >
            08164829372
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
