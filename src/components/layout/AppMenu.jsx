'use client';

import { findAllParent, findMenuItem, getAppMenuItems, getMenuItemFromURL } from '@/helpers/menu';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, Nav } from 'react-bootstrap';
import IconifyIcon from '../wrappers/IconifyIcon';
const MenuItemWithChildren = ({
  item,
  activeMenuItems,
  itemClassName,
  linkClassName,
  level
}) => {
  const level1 = level === 1;
  return <Dropdown as="li" className={itemClassName} drop={level >= 2 ? 'end' : undefined}>
      <DropdownToggle as={'a'} className={clsx('content-none d-flex align-items-center justify-content-between', linkClassName)} role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {item.label}
        {level1 ? <IconifyIcon icon="fe:arrow-down" style={{
        height: 16,
        width: 16
      }} className="d-inline-block icon icon-xxs ms-1 mt-lg-0 mt-1" /> : <IconifyIcon style={{
        height: 14,
        width: 14
      }} icon="fe:arrow-right" />}
      </DropdownToggle>

      <DropdownMenu className="custom-navbar-dropdown-menu" renderOnMount>
        <Nav as={'ul'} navbar={false}>
          {(item.children ?? []).map((child, idx) => <Fragment key={idx + child.key + idx}>
              {child.isDivider && <li className="nav-item">
                  <hr className="my-2" />
                </li>}
              {child.children ? <MenuItemWithChildren item={child} level={level + 1} activeMenuItems={activeMenuItems} itemClassName="nav-item dropdown" linkClassName={clsx('nav-link', {
            active: activeMenuItems?.includes(child.key)
          })} /> : <MenuItem item={child} level={level + 1} itemClassName="nav-item" linkClassName={clsx(activeMenuItems?.includes(child.key) && 'active', 'nav-link')} />}
            </Fragment>)}
        </Nav>
      </DropdownMenu>
    </Dropdown>;
};
const MenuItem = ({
  item,
  linkClassName,
  level,
  itemClassName
}) => {
  return <li className={itemClassName}>
      <MenuItemLink item={item} linkClassName={linkClassName} level={level + 1} />
    </li>;
};
const MenuItemLink = ({
  item,
  linkClassName
}) => {
  return <Link href={item.url ?? ''} target={item.target} className={linkClassName}>
      {item.icon ? <div className="d-flex align-items-center">
          <span className={clsx(`bg-soft-${item.iconVariant} text-${item.iconVariant} avatar avatar-xs shadow rounded icon icon-with-bg icon-xs me-3 flex-shrink-0`)}>
            {item.icon}
          </span>
          <div className="flex-grow-1">{item.label}</div>
        </div> : item.label}
    </Link>;
};
const AppMenu = ({
  centered
}) => {
  const [activeMenuItems, setActiveMenuItems] = useState([]);
  const menuItems = getAppMenuItems();
  const pathname = usePathname();
  const activeMenu = useCallback(() => {
    const trimmedURL = pathname?.replaceAll('', '');
    const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL);
    if (matchingMenuItem) {
      const activeMt = findMenuItem(menuItems, matchingMenuItem.key);
      if (activeMt) {
        setActiveMenuItems([activeMt.key, ...findAllParent(menuItems, activeMt)]);
      }
    }
  }, [pathname, menuItems]);
  useEffect(() => {
    activeMenu();
  }, [activeMenu, menuItems]);
  return <ul className={clsx('navbar-nav align-items-lg-center', centered ? 'mx-auto' : 'ms-auto')}>
      {(menuItems ?? []).map((item, idx) => {
      return <Fragment key={item.key + idx}>
            {item.children ? <MenuItemWithChildren item={item} activeMenuItems={activeMenuItems} level={1} itemClassName="nav-item" linkClassName={clsx('nav-link', {
          active: activeMenuItems.includes(item.key)
        })} /> : <MenuItem item={item} level={1} itemClassName="nav-item" linkClassName={clsx('nav-link', activeMenuItems.includes(item.key) && 'active')} />}
          </Fragment>;
    })}
    </ul>;
};
export default AppMenu;