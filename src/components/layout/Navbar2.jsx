'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo.png';
import avatar8 from '@/assets/images/avatars/img-8.jpg';

//icons
import { AddUserSvg, ChatCheckSvg, HomeSvg, LikeSvg, MailAttachSvg, NotificationSvg, ProjectSvg, ReportSvg, SettingSvg, TaskSvg } from '@/assets/data/svgIcons';
import { Collapse, DropdownItem } from 'react-bootstrap';
import IconifyIcon from '../wrappers/IconifyIcon';
import useToggle from '@/hooks/useToggle';
const notifications = [{
  icon: <AddUserSvg />,
  title: 'New User Registered',
  time: '2 min ago',
  variant: 'primary'
}, {
  icon: <ChatCheckSvg />,
  title: 'A new comment on your post',
  time: '3 min ago',
  variant: 'orange'
}, {
  icon: <MailAttachSvg />,
  title: 'A new comment on your post',
  time: '5 min ago',
  variant: 'success'
}, {
  icon: <LikeSvg />,
  title: 'A new comment on your post',
  time: '8 min ago',
  variant: 'danger'
}];
const NotificationDropdown = () => {
  return <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="notifications" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="icon-xs">
          <NotificationSvg />
        </span>
      </a>
      <div className="dropdown-menu p-2" aria-labelledby="notifications">
        {notifications.map((notification, idx) => <DropdownItem className="p-2" key={idx}>
            <div className="d-flex align-items-center">
              <span className={`bg-soft-${notification.variant} avatar avatar-xs rounded icon icon-with-bg icon-xxs text-${notification.variant} me-3 flex-shrink-0`}>
                {notification.icon}
              </span>
              <div className="flex-grow-1">
                <h6 className="fw-medium my-0 fs-13">{notification.title}</h6>
                <span className="text-muted">
                  <small>{notification.time}</small>
                </span>
              </div>
            </div>
          </DropdownItem>)}
        <Link href="" className="mt-2 text-center bg-light fs-13 btn btn-light btn-sm d-block">
          View All
        </Link>
      </div>
    </li>;
};
const ProfileDropdown = () => {
  return <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle py-0" href="#" id="user" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <div className="d-flex align-items-center">
          <div className="flex-shrink-0">
            <Image src={avatar8} className="avatar avatar-xs rounded-circle me-2" alt="image" />
          </div>
          <div className="flex-grow-1 ms-1 lh-base">
            <span className="fw-semibold fs-13 d-block line-height-normal">Greeva N</span>
            <span className="text-muted fs-13">Admin</span>
          </div>
        </div>
      </a>
      <div className="dropdown-menu p-2" aria-labelledby="user">
        <DropdownItem className="p-2">
          <IconifyIcon className="icon-xxs me-1 icon-dual" icon="lucide:user" />
          Profile
        </DropdownItem>
        <DropdownItem className="p-2">
          <IconifyIcon className="icon-xxs me-1 icon-dual" icon="lucide:settings" />
          Settings
        </DropdownItem>
        <DropdownItem className="p-2">
          <IconifyIcon className="icon-xxs me-1 icon-dual" icon="lucide:aperture" />
          Support
        </DropdownItem>
        <div className="dropdown-divider" />
        <DropdownItem className="p-2">
          <IconifyIcon className="icon-xxs me-1 icon-dual" icon="lucide:unlock" />
          Sign Out
        </DropdownItem>
      </div>
    </li>;
};
const Navbar2 = () => {
  const {
    isTrue,
    toggle
  } = useToggle();
  return <header>
      <nav className="navbar navbar-expand-lg topnav-menu mx-auto">
        <div className="container">
          <Link className="navbar-brand me-lg-3 me-auto" href="/">
            <Image src={logo} height={30} className="d-inline-block align-top" alt="logo" />
          </Link>
          <span role="button" onClick={toggle} className="navbar-toggler me-3" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content4" aria-controls="topnav-menu-content4" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </span>
          <Collapse in={isTrue} className="navbar-collapse">
            <div>
              <ul className="navbar-nav mx-auto">
                <li className="nav-item pe-3">
                  <Link className="nav-link active" href="/">
                    <div className="d-flex align-items-center">
                      <span className="icon-xs me-1 flex-shrink-0">
                        <HomeSvg />
                      </span>
                      <div className="flex-grow-1">Home</div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item pe-3">
                  <Link className="nav-link" href="">
                    <div className="d-flex align-items-center">
                      <span className="icon-xs me-1 flex-shrink-0">
                        <ProjectSvg />
                      </span>
                      <div className="flex-grow-1">Projects</div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item pe-3">
                  <Link className="nav-link" href="">
                    <div className="d-flex align-items-center">
                      <span className="icon-xs me-1 flex-shrink-0">
                        <TaskSvg />
                      </span>
                      <div className="flex-grow-1">Tasks</div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item pe-3">
                  <Link className="nav-link" href="">
                    <div className="d-flex align-items-center">
                      <span className="icon-xs me-1 flex-shrink-0">
                        <ReportSvg />
                      </span>
                      <div className="flex-grow-1">Reports</div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/setting">
                    <div className="d-flex align-items-center">
                      <span className="icon-xs me-1 flex-shrink-0">
                        <SettingSvg />
                      </span>
                      <div className="flex-grow-1">Settings</div>
                    </div>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav align-items-center">
                <div className="d-none d-lg-flex">
                  <NotificationDropdown />
                  <ProfileDropdown />
                </div>
              </ul>
            </div>
          </Collapse>
        </div>
      </nav>
    </header>;
};
export default Navbar2;