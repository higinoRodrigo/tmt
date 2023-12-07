import { Button, message, Space } from 'antd';

export default function Toast() {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Essa é uma mensagem de sucesso',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Essa é uma mensagem de erro',
    });
  };

  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'Essa é uma mensagem de alerta',
    });
  };

  const info = () => {
    messageApi.open({
      type: 'info',
      content: 'Essa é uma mensagem de informação',
    });
  };

  const loading = () => {
    messageApi.open({
      type: 'loading',
      content: 'Essa é uma mensagem de carregamento',
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={success}>Sucesso</Button>
        <Button onClick={error}>Erro</Button>
        <Button onClick={warning}>Alerta</Button>
        <Button onClick={info}>Informação</Button>
        <Button onClick={loading}>Carregamento</Button>
      </Space>
    </>
  )
}
