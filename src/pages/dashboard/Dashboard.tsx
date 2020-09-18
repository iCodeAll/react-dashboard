import React, { useState, useEffect } from 'react';
import Page from '../../components/page/Page';
import Search from '../../components/search';
import DateRangePicker from '../../components/date-range-picker';
import CampaignTable from '../../components/campaign-table';
import { ICampaignTableData, IPieChartDataItem } from '../../models';
import PieChart from '../../components/chart/pie';
import { useViewport } from '../../hooks';
import './style.scss';

const fakeTableData: ICampaignTableData = [
  {
    id: 1,
    campaign: 'Chevy Conquesting',
    budget: '$5 Daily',
    duration: '3 Days',
    days_left: '2 Days',
    days_passed: '1 Days',
    impressions: 117,
    cost: 15,
    roas: 55,
  },
  {
    id: 2,
    campaign: 'Ford Conquesting',
    budget: '$1 Daily',
    duration: '365 Days',
    days_left: '1 Days',
    days_passed: '1 Days',
    impressions: 5480,
    cost: 540,
    roas: 74,
  },
  {
    id: 3,
    campaign: 'Mustang Conquesting',
    budget: '$17 Daily',
    duration: '10 Days',
    days_left: '8 Days',
    days_passed: '2 Days',
    impressions: 579,
    cost: 170,
    roas: 12,
  },
];

const fakeGenderData: IPieChartDataItem[] = [
  {
    label: 'Women',
    value: 35,
    color: '#D1D7F8',
  },
  {
    label: 'Men',
    value: 65,
    color: '#6C63FF',
  },
];
const fakeAgeData: IPieChartDataItem[] = [
  {
    label: '40-50',
    value: 10,
    color: '#BFBCFC',
  },
  {
    label: '20-30',
    value: 24,
    color: '#8780FE',
  },

  {
    label: '30-40',
    value: 62,
    color: '#6C63FF',
  },
  {
    label: '50-60',
    value: 4,
    color: '#DCDAFB',
  },
];
const data1 = { men: 65, women: 35 };
const Dashboard: React.FC = () => {
  const { width } = useViewport();
  const [tableData, setTableData] = useState<ICampaignTableData>([]);
  useEffect(() => {
    setTableData(fakeTableData);
  }, []);
  return (
    <Page>
      <div className="content">
        <div className="content-header">
          <Search />
          <DateRangePicker />
        </div>
        <div className="content-table">
          <CampaignTable tableData={tableData} />
        </div>
        <div className="content-chart">
          <PieChart
            id="pie-chart-gender"
            width={(width - 100) / 3}
            data={fakeGenderData}
          />
          <PieChart
            id="pie-chart-age"
            width={(width - 100) / 3}
            data={fakeAgeData}
          />
          <PieChart
            id="pie-chart-age1"
            width={(width - 100) / 3}
            data={fakeAgeData}
          />
        </div>
      </div>
    </Page>
  );
};
export default Dashboard;
