import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Space, Tabs as TabsAntd } from 'antd';

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

export default function Tabs(){
  const [tabPosition, setTabPosition] = useState<TabPosition>('left');

  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };

  return (
    <>
      <Space style={{ marginBottom: 24 }}>
        Posição da tab:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">Cima</Radio.Button>
          <Radio.Button value="bottom">Baixo</Radio.Button>
          <Radio.Button value="left">Esquerda</Radio.Button>
          <Radio.Button value="right">Direita</Radio.Button>
        </Radio.Group>
      </Space>
      <TabsAntd
        tabPosition={tabPosition}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Conteúdo Tab ${id}`,
          };
        })}
      />
    </>
  );
};
