import { rangePresets } from '@/components/utils/rangePresets';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form as FormAntd, InputNumber, Checkbox, DatePicker, Row, Col, Space, Input, Select, Upload, message, Radio } from 'antd';
import { useState } from 'react';
const { RangePicker } = DatePicker

export default function Form() {
  const [form] = FormAntd.useForm();
  const filterOption = (input: string, option?: { label: string; value: string }) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} arquivo enviado com sucesso.`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} falha ao enviar o arquivo.`);
      }
    },
  };

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const plainOptions = ['A', 'B', 'C'];
  return (
    <FormAntd
      form={form}
      layout={"vertical"}
      name="form"
      initialValues={{
        text: '',
        number: '',
        select: null,
        data: null,
        dataRange: null,
        radio: null,
        checkbox: null,
        import: '',
      } as any}
      labelCol={{ span: 4 }}
      wrapperCol={{
        offset: 0,
        span: 8,
      }}
    >
      <FormAntd.Item label="Texto"
        name="text"
        rules={[{ required: true }]}
      >
        <Input placeholder='Texto' />
      </FormAntd.Item>

      <FormAntd.Item label="Número"
        name="number"
      >
        <InputNumber min={1} max={10} placeholder='0' />
      </FormAntd.Item>

      <FormAntd.Item label="Seleção"
        name="select"
      >
        <Select
          showSearch
          placeholder="Selecione"
          optionFilterProp="children"
          filterOption={filterOption}
          options={[
            {
              value: 'jack',
              label: 'Jack',
            },
            {
              value: 'lucy',
              label: 'Lucy',
            },
            {
              value: 'tom',
              label: 'Tom',
            },
          ]}
        />
      </FormAntd.Item>

      <FormAntd.Item label="Data"
        name="data"
      >
        <DatePicker
          presets={rangePresets}
          format="DD/MM/YYYY"
          size="middle"
        />
      </FormAntd.Item>

      <FormAntd.Item label="Data Range"
        name="dataRange"
      >
        <RangePicker
          presets={rangePresets}
          format="DD/MM/YYYY"
          size="middle"
        />
      </FormAntd.Item>

      <FormAntd.Item label="Radio"
        name="radio"
      >
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
      </FormAntd.Item>

      <FormAntd.Item label="Checkbox"
        name="checkbox"
      >
        <Checkbox.Group options={plainOptions} />
      </FormAntd.Item>

      <FormAntd.Item label="Enviar Arquivo"
        name="import"
      >
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Enviar Arquivo</Button>
        </Upload>
      </FormAntd.Item>
    </FormAntd>
  )
}
