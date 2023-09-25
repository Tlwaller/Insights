import {SnapGlobalHeader, SnapHeaderWrapper, SnapLogo} from '../suit'

function Header() {

  return (
    <SnapGlobalHeader>
      <SnapLogo product="snap-logo-insights" white data-testid="snap-logo"></SnapLogo>
      <SnapHeaderWrapper showLoginButtons={false}></SnapHeaderWrapper>
    </SnapGlobalHeader>
  );
}

export default Header
