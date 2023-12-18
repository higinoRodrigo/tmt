import { Modal } from "antd"
// import { signOut } from "next-auth/react"

export const SignOut = ({isModalOpen, setIsModalOpen}) => {
  const handleOk = async () => {
    window.location.href = '/login'
    // await signOut({ callbackUrl: "/login" })
  };

  const handleCancel = () => {
    setIsModalOpen(false)
  };

  return (
    <Modal title="Sair" open={isModalOpen} okText="Sim" cancelText="Não" onOk={handleOk} onCancel={handleCancel}>
      <p>Deseja realmente sair da aplicação?</p>
    </Modal>
  )
}
