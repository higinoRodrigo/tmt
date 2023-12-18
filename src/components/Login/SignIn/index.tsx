// import { signIn } from "next-auth/react"
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
  Carousel
} from "antd"
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai"
// import { getPerfil } from "@/store/perfil/actions"
// import { useAppDispatch } from "@/hooks/useAppDispatch"
import Image from "next/image";
import logo from "/public/logoTmt2.png";
import bgLogin from "/public/bg-login.jpg";
import Head from "next/head"

export const SignIn = () => {
  const router = useRouter()
  // const dispatch = useAppDispatch()
  const [loginError, setLoginError] = useState("")
  const [isLoginStarted, setIsLoginStarted] = useState(false)

  useEffect(() => {
    const bgDiv = document.getElementById('backgroundDiv');
    if (bgDiv) {
      bgDiv.classList.remove('opacity-0');
      bgDiv.classList.add('opacity-100');
    }
  }, []);

  function handleError(message) {
    setLoginError(message)
  }

  async function onFinish(values) {
    setLoginError("")
    const { username, password } = values

    setIsLoginStarted(true)
    router.replace("/")

    // const result = await signIn("credentials", {
    //   username: username,
    //   password: password,
    //   callbackUrl: `/`,
    //   redirect: false,
    // })

    // if (result?.error) {
    //   setIsLoginStarted(false)
    //   handleError(result.error || "Usuário não autorizado!")
    // } else if (result.url) {
    //   // await dispatch(getPerfil())
    //   router.replace("/")
    // }
  }

  return (
    <>
      <Head>
        <title>Login - TMT Inteligência Logística</title>
      </Head>

      <div className="flex flex-row w-screen h-screen p-10 transition-all duration-500 opacity-0" id="backgroundDiv">
        <div className="flex items-center justify-center pb-32 flex-1 bg-white rounded-l-lg">
          <div className="flex text-center" style={{backgroundColor: "#fffffff0"}}>
            <Spin spinning={isLoginStarted}>
              <div className="p-4 pb-0 flex flex-col items-center min-w-350">
                <Image
                  className="w-52"
                  src={logo}
                  alt="logo"
                />
                <Typography.Title level={5} className="mt-8 px-12">
                  Insira seu usuário e senha
                </Typography.Title>

                <Form
                  name="user_signup"
                  onFinish={onFinish}
                  className="w-full"
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Favor informar seu usuário!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Usuário"
                      prefix={<AiOutlineUser />}
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Favor informar sua senha!",
                      },
                    ]}
                  >
                    <Input.Password 
                      size="large"
                      prefix={<AiOutlineLock />}
                      type="password"
                      placeholder="Senha"
                    />
                  </Form.Item>

                  <Space>
                    <Form.Item>
                      <Button
                        size="large"
                        type="primary"
                        htmlType="submit"
                        disabled={isLoginStarted}
                        className="mt-2 w-36"
                      >
                        Entrar
                      </Button>
                    </Form.Item>
                  </Space>
                  <br />
                  <Space>
                    <Form.Item>
                      <Button
                        size="large"
                        type="link"
                        onClick={() => router.push("/login/recuperarSenha")}
                        style={{marginTop: "-10px"}}
                      >
                        Esqueceu a senha?
                      </Button>
                    </Form.Item>
                  </Space>
                </Form>

                {loginError && (
                  <Alert
                    message="Erro ao se autenticar!"
                    description={loginError}
                    type="warning"
                  />
                )}
              </div>
            </Spin>
          </div>
        </div>

        <div className="lg:flex hidden flex-1  p-14 pl-0 bg-white rounded-r-lg">
          <div className="bg-[url('/bg-login3.jpeg')] bg-cover flex-1 rounded-xl" id="backgroundDiv"/>
        </div>
      </div>
    </>
  )
}
