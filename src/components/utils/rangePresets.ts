import dayjs from "dayjs";

export const rangePresets: any = [
  {
    label: 'Hoje',
    value: [dayjs(), dayjs()],
  },
  {
    label: 'Ontem',
    value: [dayjs().add(-1, 'd'), dayjs().add(-1, 'd')],
  },
  {
    label: 'Últimos 3 dias',
    value: [dayjs().add(-2, 'd'), dayjs()],
  },
  {
    label: 'Últimos 7 dias',
    value: [dayjs().add(-6, 'd'), dayjs()],
  },
  {
    label: 'Este mês',
    value: [dayjs().startOf('month'), dayjs().endOf('month')],
  },
  {
    label: 'Mês passado',
    value: [dayjs().subtract(1, 'month').startOf('month'), dayjs().subtract(1, 'month').endOf('month')],
  },
  {
    label: 'Este ano',
    value: [dayjs().startOf('year'), dayjs().endOf('year')],
  },
  {
    label: 'Ano passado',
    value: [dayjs().subtract(1, 'year').startOf('year'), dayjs().subtract(1, 'year').endOf('year')],
  }
];