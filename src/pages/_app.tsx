import type { AppProps } from 'next/app';
import { ConfigProvider as ProviderAntd } from "antd";
import ptBR from "antd/lib/locale/pt_BR";
import { defaultValidateMessages } from "@/components/utils/messagesAntd";
import '@/styles/globals.css';
import 'antd/dist/reset.css';
import { StyleProvider } from '@ant-design/cssinjs';
import { BaseLayout } from '@/template/BaseLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderAntd
      locale={ptBR}
      form={{validateMessages: defaultValidateMessages}}
    >
      <StyleProvider hashPriority="high">
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </StyleProvider>
    </ProviderAntd>
  )
}

