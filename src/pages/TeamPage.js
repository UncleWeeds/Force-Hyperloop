import React from 'react';
import TeamMembers from '../components/TeamMembers';
import { teamMembers } from '../data/sections';

export default function TeamPage() {
  return <TeamMembers members={teamMembers} />;
}
