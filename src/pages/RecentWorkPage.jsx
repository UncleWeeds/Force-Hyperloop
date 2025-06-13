import React from 'react';
import RecentWork from '../components/RecentWork';
import { recentWork } from '../data/sections';

export default function RecentWorkPage() {
  return <RecentWork items={recentWork} />;
}
