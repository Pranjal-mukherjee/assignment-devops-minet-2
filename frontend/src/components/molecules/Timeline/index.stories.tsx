import { Meta, type StoryFn  } from '@storybook/react'
import React from 'react'
import TimeLineTabs from './index'
import { timeLineValues } from '../../../utils/constants'

export default {
  title: 'molecules/TimeLineTabs',
  component: TimeLineTabs,
} as Meta;

const Template: StoryFn<typeof TimeLineTabs> = (args: any) => (
  <TimeLineTabs {...args} />
)


export const TimeLineTabsStoryDetails = Template.bind({})
TimeLineTabsStoryDetails.args = {
  typevariant: "Detail",
  value: 3,
  timeLineValues: timeLineValues
}

export const TimeLineTabsStoryDashboard = Template.bind({});
TimeLineTabsStoryDashboard.args = {
  typevariant: "Dashboard",
  value: 3,
  timeLineValues: timeLineValues
};