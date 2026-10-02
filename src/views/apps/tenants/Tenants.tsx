import { useEffect, useState } from 'react';
import { Button } from 'src/components/ui/button';
import { useNavigate } from 'react-router';
import { DataTable } from 'src/components/utilities/table/DataTable';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import { getTenants } from 'src/services/tenants';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Tenants',
  },
];

const Tenants = () => {
  const [tenants, setTenants] = useState<Record<string, unknown>[]>([]);
  const navigate = useNavigate();
  const getTenantsData = async () => {
    try {
      const data = await getTenants();
      console.table(data);
      setTenants(data as unknown as Record<string, unknown>[]);
    } catch (error) {}
  };

  useEffect(() => {
    getTenantsData();
  }, []);

  return (
    <>
      <BreadcrumbComp title="Tenants" items={BCrumb} />
      <div className="flex justify-end items-center mb-4 gap-4">
        <Button
          onClick={() => navigate('/apps/tickets/create')}
          className="rounded-md whitespace-nowrap"
        >
          New Tenant
        </Button>
      </div>
      <DataTable data={tenants} />
    </>
  );
};

export default Tenants;
