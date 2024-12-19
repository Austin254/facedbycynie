import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ContentManager } from '../../components/admin/ContentManager';
import { useAdmin } from '../../contexts/AdminContext';
import { TabButton } from '../../components/admin/dashboard/TabButton';
import { DashboardHeader } from '../../components/admin/dashboard/DashboardHeader';

type TabType = 'portfolio' | 'blog' | 'homepage';
const TABS: TabType[] = ['portfolio', 'blog', 'homepage'];

export function AdminDashboard() {
  const { logout } = useAdmin();
  const [activeTab, setActiveTab] = useState<TabType>('portfolio');

  return (
    <div className="pt-20">
      <DashboardHeader onLogout={logout} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8">
          {TABS.map((tab) => (
            <TabButton
              key={tab}
              tab={tab}
              activeTab={activeTab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ContentManager />
        </motion.div>
      </div>
    </div>
  );
}