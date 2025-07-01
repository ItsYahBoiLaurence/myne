import { useOpenRecordsSearchPageInCommandMenu } from '@/command-menu/hooks/useOpenRecordsSearchPageInCommandMenu';
import { SettingsPath } from '@/types/SettingsPath';
import { NavigationDrawerItem } from '@/ui/navigation/navigation-drawer/components/NavigationDrawerItem';
import { NavigationDrawerSubItem } from '@/ui/navigation/navigation-drawer/components/NavigationDrawerSubItem';
import { isNavigationDrawerExpandedState } from '@/ui/navigation/states/isNavigationDrawerExpanded';
import { navigationDrawerExpandedMemorizedState } from '@/ui/navigation/states/navigationDrawerExpandedMemorizedState';
import { navigationMemorizedUrlState } from '@/ui/navigation/states/navigationMemorizedUrlState';
import { useLingui } from '@lingui/react/macro';
import { IconChevronDown, IconChevronRight, IconGraph, IconMail, IconUser } from '@tabler/icons-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { IconSearch, IconSettings } from 'twenty-ui/display';
import { useIsMobile } from 'twenty-ui/utilities';
import { getSettingsPath } from '~/utils/navigation/getSettingsPath';

export const MainNavigationDrawerFixedItems = () => {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile();
  const location = useLocation();
  const setNavigationMemorizedUrl = useSetRecoilState(
    navigationMemorizedUrlState,
  );

  const [isNavigationDrawerExpanded, setIsNavigationDrawerExpanded] =
    useRecoilState(isNavigationDrawerExpandedState);
  const setNavigationDrawerExpandedMemorized = useSetRecoilState(
    navigationDrawerExpandedMemorizedState,
  );

  const navigate = useNavigate();

  const { t } = useLingui();

  const { openRecordsSearchPage } = useOpenRecordsSearchPageInCommandMenu();
  return (
    !isMobile && (
      <>
        <NavigationDrawerItem
          label={t`Search`}
          Icon={IconSearch}
          onClick={openRecordsSearchPage}
          keyboard={['/']}
          mouseUpNavigation={true}
        />
        <NavigationDrawerItem
          label={t`Settings`}
          to={getSettingsPath(SettingsPath.ProfilePage)}
          onClick={() => {
            setNavigationDrawerExpandedMemorized(isNavigationDrawerExpanded);
            setIsNavigationDrawerExpanded(true);
            setNavigationMemorizedUrl(location.pathname + location.search);
            navigate(getSettingsPath(SettingsPath.ProfilePage));
          }}
          Icon={IconSettings}
        />
        <NavigationDrawerItem
          label={t`Dashboard`}
          to={'/dashboard'}
          Icon={IconGraph}
        />
        <NavigationDrawerItem
          label="Reports"
          Icon={IconUser}
          rightOptions={
            open ? <IconChevronDown size={16} /> : <IconChevronRight size={16} />
          }
          onClick={() => setOpen((prev) => !prev)}
          active={open}
        />
        {open && (
          <>
            <NavigationDrawerSubItem
              label="Ticket Summary"
              to="/ticket-summary"
              Icon={IconUser}
            />
            <NavigationDrawerSubItem
              label="First Response"
              to="/first-response"
              Icon={IconMail}
            />
            <NavigationDrawerSubItem
              label="Resolution Time"
              to="/resolution-time"
              Icon={IconMail}
            />
            <NavigationDrawerSubItem
              label="Ticket Volume"
              to="/ticket-volume"
              Icon={IconMail}
            />
          </>
        )}
      </>
    )
  );
};
