import React from "react";
import StatBoxA from "../components/StatBoxA";
import StatBoxB from "../components/StatBoxB";
import { usePermissionsQuery, useSuperBasicUserInfoQuery } from "../graphql/generated";
export function PageOne() {
  const { data, loading } = usePermissionsQuery();

  return (
    <div>
      {!!loading ? (
        "loading..."
      ) : (
        <div>
          <p>Email: {data?.me?.email}</p>
          <p>Permissions: {data?.me?.permissions}</p>
          <p>Id: {data?.me?.id}</p>
        </div>
      )}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 py-2'>
        <StatBoxA statName="Life Time Total Raised" amount={116000} />
        <StatBoxA statName="Average Donation" amount={50}/>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 py-2'>
        <StatBoxB 
          status="ACTIVE (7)" 
          title="Total Raised" 
          amount={8000} 
          percent={45}
          percentDescription="Participation %"
          upDown='down'
        />
        <StatBoxB 
          status="UPCOMING (11)" 
          title="Forecasted Amount" 
          amount={9000} 
          percent={70}
          percentDescription="Preloading %"
          upDown='unchanged'
        />
        <StatBoxB 
          status="CLOSED (50)" 
          title="Total Raised" 
          amount={89000} 
          percent={87}
          percentDescription="Participation %"
          upDown='up'
        />
      </div>
      <div>
        {!!loading ? (
          "loading..."
        ) : (
          <div>
          <p>Email: {data?.me?.email}</p>
          <p>Permissions: {data?.me?.permissions}</p>
          <p>Id: {data?.me?.id}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export function PageTwo() {
  const {data,loading} = useSuperBasicUserInfoQuery()
  return (
    <div>
      {!!loading ? (
        "loading..."
      ) : (
        <div>
          <p>First Name: {data?.me?.firstName}</p>
          <p>Last Name: {data?.me?.lastName}</p>
        </div>
      )}
    </div>
  );
}
export function PageThree() {
  return <div>Page Three</div>;
}
export function PageFour() {
  return <div>Page Four</div>;
}
export function PageFive() {
  return <div>Page Five</div>;
}
export function PageSix() {
  return <div>Page Six</div>;
}
