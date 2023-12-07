/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import {
  DesktopOutlined,
  FileAddOutlined,
  HomeOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, Popconfirm, theme } from 'antd';
import { IoIosArrowBack, IoIosNotificationsOutline } from "react-icons/io";
import { MdExitToApp } from "react-icons/md";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
const { Content, Footer, Sider, Header } = Layout;
import { ConfigProvider as ProviderAntd } from "antd";
import { IoExitOutline } from "react-icons/io5";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

interface Template1Props {
  children: React.ReactNode;
}

interface DataPage {
  route: string;
  titleHead: string;
}

export const Template2 = ({ children }: Template1Props) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const {token: { colorBgContainer }} = theme.useToken();
  const [tema, setTema] = useState('#7e0c11');

  useEffect(() => {
    setSelectedKeys([router.pathname]);
  }, [router.pathname]);
  
  const returnPhotoProfile = (img) => {
    if(img){
      return img.url
    }
    return '/profile.png';
  }

  const returnLabelLink = (label, url) => {
    return (
      <Link href={url}>
        {label}
      </Link>
    )
  }
  
  const items: MenuItem[] = [
    getItem(returnLabelLink('Início', '/'), '/', <HomeOutlined />),
    getItem(returnLabelLink('Ofertas', '/ofertas'), '/ofertas', <DesktopOutlined />),
    getItem('Geral', '/geral', <SettingOutlined />, [
      getItem(returnLabelLink('Grid', '/grid'), '/grid'),
      getItem(returnLabelLink('Form', '/form'), '/form'),
      getItem(returnLabelLink('Tabs', '/tabs'), '/tabs'),
      getItem(returnLabelLink('Toast', '/toast'), '/toast'),
      getItem(returnLabelLink('404', '/404'), '/404'),
    ]),
    getItem(returnLabelLink('Importar', '/importar'), '/importar', <FileAddOutlined />),
  ];

  const handleClick = ({ key }) => {
    setSelectedKeys([key]);
  };

  const titlePage = [
    {
      route: '/perfil',
      titleHead: 'Perfil'
    },
    {
      route: '/',
      titleHead: 'Início'
    },
    {
      route: '/ofertas',
      titleHead: 'Ofertas'
    },
    {
      route: '/geral',
      titleHead: 'Geral'
    },
    {
      route: '/grid',
      titleHead: 'Grid'
    },
    {
      route: '/form',
      titleHead: 'Form'
    },
    {
      route: '/tabs',
      titleHead: 'Tabs'
    },
    {
      route: '/toast',
      titleHead: 'Toast'
    },
    {
      route: '/404',
      titleHead: '404'
    },
    {
      route: '/importar',
      titleHead: 'Importar'
    },
  ]

  const dataPage: DataPage = titlePage.find((item) => item.route === router.pathname) || { route: '/', titleHead: 'Início' };

  return (
    <ProviderAntd theme={{token: {colorPrimary: tema}}}>
      <Head>
        <title>{`${dataPage?.titleHead} - TMT Inteligência Logística`}</title>
      </Head>
      
      <Layout className='noSelect'>
        <Header
          style={{
            background: "#232220e2",
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            position: 'sticky',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '84px',
          }}
          className='rounded-b-[32px]'
        >
          <div className={`lg:w-32 flex-shrink-0 w-16 transition-all duration-500`}>
            <img
              className="w-full h-full object-cover"
              src={'/logo.svg'}
              alt="logo"
            />
          </div>

          <div className='flex  items-center justify-center gap-2 h-[84px]'>
            <div className='h-[72px] cursor-pointer flex justify-center hover:bg-[#1f1e1c] p-1 px-2 rounded-md'>
              <Link href="/perfil" className='flex items-center justify-center gap-2 rounded-[8px] w-full mx-[1px]'>
                <div className={`transition-all duration-300 flex items-center justify-center gap-2 rounded-[8px] w-full `}>
                  <div className="relative flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12">
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-full shadow"
                      src={returnPhotoProfile(null)}
                      alt="foto perfil"
                    />
                  </div>

                  <span className={`text-white font-semibold`}>José Silva</span>
                </div>
              </Link>
            </div>

            <div className='h-[72px] px-2 flex justify-center items-center cursor-pointer hover:bg-[#1f1e1c] flex-1 rounded-md py-3 transition-all duration-300'>
              <IoIosNotificationsOutline size={24} color='#fff'/>
            </div>

            <Popconfirm
              title="Deseja realmente sair?"
              okText="Sim"
              cancelText="Não"
              placement="bottom"
              onConfirm={() => console.log('sair')}
              className='w-full'
            >
              <div className='h-[72px] items-center pl-2 pr-1 flex justify-center cursor-pointer hover:bg-[#1f1e1c] flex-1 rounded-md py-3 transition-all duration-300'>
                <IoExitOutline size={22} color="#fff" />
              </div>
            </Popconfirm>
          </div>
        </Header>

        <Layout>
          <Sider
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            style={{
              background: '#f5f5f5',
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              top: '84px',
              bottom: 0,
            }}
            className='flex flex-col justify-between'
          >
            <div className='flex items-center justify-center px-2 py-2 gap-2'>
              <div
                onClick={() => setCollapsed(!collapsed)}
                className='px-2 flex justify-center cursor-pointer hover:bg-[#ececec] flex-1 rounded-md py-3 transition-all duration-300'
              >
                <IoIosArrowBack size={17} className={`${collapsed ? "scale-x-[-1]" : ""} transition-all duration-500`}/>
              </div>
            </div>

            <Menu
              selectedKeys={selectedKeys}
              onClick={handleClick}
              mode="inline"
              items={items}
              style={{background: '#f5f5f5', border: 'none'}}
            />
          </Sider>
          
          <Layout style={collapsed ? {marginLeft: '70px'}: {marginLeft: '190px'}} className='transition-all duration-300'>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb
                className='font-semibold'
                items={dataPage?.route === '/' ? [{title: 'Início'}] : [
                  {
                    title: <Link href="/">Início</Link>,
                  },
                  {
                    title: dataPage?.titleHead,
                  },
                ]}
                style={{ margin: '16px 0' }}
              />

              <div className='absolute top-24 right-4 flex flex-row justify-center'>
                <span>Temas:</span>
                <button onClick={() => setTema('#7e0c11')} className='w-5 h-5 rounded-full bg-[#7e0c11] mx-2' />
                <button onClick={() => setTema('#329950')} className='w-5 h-5 rounded-full bg-[#329950] mx-2' />
                <button onClick={() => setTema('#217994')} className='w-5 h-5 rounded-full bg-[#217994] mx-2' />
              </div>

              <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }} className='rounded-lg'>
                {children}
              </div>

              <Footer style={{ textAlign: 'center' }}>©2023 TMT | Inteligência Logística</Footer>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ProviderAntd>
  );
};