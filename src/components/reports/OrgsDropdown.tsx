import { Org } from "../../graphql/generated";
import SnapSelectFallback from "../SnapSelectFallback";

interface OrgsDrowndownProps {
    orgs: Org[],
    setOrgSearch: Function
};

const OrgsDropdown: React.FC<OrgsDrowndownProps> = ({orgs, setOrgSearch}) => {
    return (
        <SnapSelectFallback
          id="organization-select" 
          name="organization-select" 
          label="Organization"
          onChange={(e) => {setOrgSearch(e.target.value)}}
        >
          <option value="all">All</option>
          { orgs && orgs.sort((a, b) => a.name?.localeCompare(b.name as string) as number).map((org, index) => {
            return (<option value={org.id} key={index}>{org.name}</option>);
          })}
        </SnapSelectFallback>
    )
};

export default OrgsDropdown;
