import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import {
  Form,
  Input,
  Button,
  Typography,
  Space,
  Alert,
  Card,
  Spin,
  Popconfirm,
  message,
} from "antd"
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai"
import Image from "next/image";
import logo from "/public/logoTmt2.png";
import Head from "next/head"
// import service from "@/services/perfil";

export const RecuperarSenhaForm = () => {
  const router = useRouter()
  const [form] = Form.useForm()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [waitingSendEmail, setWaitingSendEmail] = useState(false)

  useEffect(() => {
    const bgDiv = document.getElementById('backgroundDiv');
    if (bgDiv) {
      bgDiv.classList.remove('opacity-0');
      bgDiv.classList.add('opacity-100');
    }
  }, []);

  const onFinish = async (values) => {
    setError("")
    return
    const dataStart = {
      email: values.email
    }

    const dataRecover = {
      email: values.email,
      password: values.newPassword,
      recoveryCode: values.codigo
    }

    setLoading(true)
    if(!waitingSendEmail){
      // const result = await service.startRecover(dataStart)
      setLoading(false)
      setWaitingSendEmail(true)
      // msgRequest(result)
    }

    if(waitingSendEmail){
      if(values.newPassword.length < 6){
        setLoading(false)
        return handleError("A senha deve conter no mínimo 6 caracteres.")
      }
      
      if(values.newPassword !== values.confirmNewPassword){
        setLoading(false)
        return handleError("As senhas não coincidem.")
      }

      // const result = await service.recoverPassword(dataRecover)
      setLoading(false)

      // if(result?.success){
        message.success("Senha alterada com sucesso!")
        router.push("/login")
      // }

      // if(!result?.success){
      //   handleError(result?.message || "Erro ao alterar senha.")
      // }
    }
  }

  const handleSendAgain = async () => {
    setError("")
    setLoading(true)
    // const result = await service.startRecover({email: form.getFieldValue("email")})
    setLoading(false)

    // msgRequest(result)
  }

  const handleError = (message) => {
    setError(message)
  }

  const msgRequest = (result) => {
    if(result.success){
      message.success("Código de recuperação enviado, verifique sua caixa de entrada.")
    }

    if(!result?.success){
      handleError(result?.message || "Erro ao enviar código de recuperação.")
    }
  }

  return (
    <>
      <Head>
        <title>Recuperar Senha - TMT Inteligência Logística</title>
      </Head>

      <div className="flex flex-row w-screen h-screen p-10 transition-all duration-500 opacity-0" id="backgroundDiv">
        <div className="lg:flex hidden flex-1  p-14 pr-0 bg-white rounded-l-lg transition-all duration-300">
          <div className="bg-[url('/bg-login2.jpg')] bg-cover flex-1 rounded-xl"/>
        </div>

        <div className="flex items-center justify-center pb-32 flex-1 bg-white rounded-r-lg">
          <div className="flex text-center" style={{backgroundColor: "#fffffff0"}}>
            <Spin spinning={loading}>
              <div className="p-4 pb-0 flex flex-col items-center" style={{minWidth: "400px"}}>
                <Image
                  className="w-52"
                  src={logo}
                  alt="logo"
                />
                <Typography.Title level={5} className="mt-8">
                  {
                    waitingSendEmail ? 
                    "Digite o código de recuperação e sua nova senha." : 
                    "Informe seu e-mail e clique em recuperar senha."
                  }
                </Typography.Title>

                <span className="mb-5" style={{marginTop: "-10px"}}>
                  {
                    waitingSendEmail ? 
                    "Caso não tenha recebido o código de recuperação, verifique sua caixa de spam." : 
                    "Você receberá um e-mail com um código de recuperação."
                  }
                </span>
              
                <Form
                  form={form}
                  name="recuperarSenhaForm"
                  onFinish={onFinish}
                  className="w-full"
                >
                  <Form.Item
                    name="email"
                    rules={[{required: true}]}
                  >
                    <Input
                      size="large"
                      placeholder="E-mail"
                      prefix={<AiOutlineMail />}
                      style={{maxWidth: "320px"}}
                      autoComplete="one-time-code"
                      readOnly={waitingSendEmail}
                    />
                  </Form.Item>

                  {
                    waitingSendEmail && (
                      <>
                        <Form.Item
                          name="codigo"
                          rules={[{required: true}]}
                        >
                          <Input
                            size="large"
                            placeholder="Código de Recuperação"
                            prefix={<AiOutlineMail />}
                            style={{maxWidth: "320px"}}
                            autoComplete="one-time-code"
                          />
                        </Form.Item>

                        <Form.Item
                          name="newPassword"
                          rules={[{required: true}]}
                        >
                          <Input.Password 
                            size="large"
                            prefix={<AiOutlineLock />}
                            type="password"
                            placeholder="Nova Senha"
                            style={{maxWidth: "320px"}}
                            autoComplete="one-time-code"
                          />
                        </Form.Item>

                        <Form.Item
                          name="confirmNewPassword"
                          rules={[{required: true}]}
                        >
                          <Input.Password 
                            size="large"
                            prefix={<AiOutlineLock />}
                            type="password"
                            placeholder="Confirmar Nova Senha"
                            style={{maxWidth: "320px"}}
                            autoComplete="one-time-code"
                          />
                        </Form.Item>
                      </>
                    )
                  }

                  <Space>
                    <Form.Item>
                      <Button
                        size="large"
                        type="primary"
                        htmlType="submit"
                        disabled={loading}
                        className="mt-2 w-44"
                      >
                        {waitingSendEmail ? "Alterar Senha" : "Recuperar Senha"}
                      </Button>
                    </Form.Item>
                    {
                      waitingSendEmail && (
                        <Form.Item>
                          <Popconfirm
                            title="Deseja enviar o código novamente?"
                            onConfirm={() => handleSendAgain()}
                            okText="Sim"
                            cancelText="Não"
                            placement="bottomLeft"
                          >
                            <Button
                              size="large"
                              type="default"
                              disabled={loading}
                              className="mt-2"
                            >
                              Enviar Código Novamente
                            </Button>
                          </Popconfirm>
                        </Form.Item>
                      )
                    }
                  </Space>
                  <br />
                  <Space>
                    <Form.Item>
                      <Button
                        size="large"
                        type="link"
                        onClick={() => router.push("/login")}
                        style={{marginTop: "-10px"}}
                      >
                        Voltar
                      </Button>
                    </Form.Item>
                  </Space>
                </Form>

                {error && (
                  <Alert
                    message="Erro no processo de recuperação de senha!"
                    description={error}
                    type="warning"
                  />
                )}
              </div>
            </Spin>
          </div>
        </div>
      </div>
    </>
  )
}
