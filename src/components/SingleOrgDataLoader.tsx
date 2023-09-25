import React, { useEffect } from 'react';
import { useOrgQuery } from '../graphql/generated';

interface SingleOrgDataLoaderProps {
  orgId: string | null | undefined;
  onOrgDataLoaded: (orgId:string, data:any) => void;
}

const SingleOrgDataLoader: React.FC<SingleOrgDataLoaderProps> = ({ orgId, onOrgDataLoaded }) => {
  const {data: orgData, loading: orgDataLoading} = useOrgQuery({variables: { orgId: orgId || '', hierarchy: true}});

  useEffect(() => {
    if(!orgDataLoading) {
      onOrgDataLoaded(orgId || '', orgData);
    }
  }, [orgDataLoading]); //eslint-disable-line

  return (
    <></>
  );
};

export default SingleOrgDataLoader;
