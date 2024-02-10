import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  PowerIcon,
  UserGroupIcon,
  AdjustmentsHorizontalIcon,
  UserPlusIcon,
  FolderPlusIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
  CalendarDaysIcon
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import lmsIcon from '../../assets/lmsIcon.png'

function SidebarWithBurgerMenu() {
  const navigate = useNavigate()
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <IconButton variant="text" size="lg" className="mr-1" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <img
              src={lmsIcon}
              alt="brand"
              className="h-8 w-8"
            />
            <Typography variant="h5" color="blue-gray">
              LMS
            </Typography>
          </div>
          <List>
            <hr className="my-2 border-blue-gray-50" />

            <ListItem onClick={() => { navigate('/'); closeDrawer(); }}>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
            <hr className="my-2 border-blue-gray-50" />
            {/* manage users and courses */}
            <ListItem onClick={() => { navigate('/users'); closeDrawer(); }}>
              <ListItemPrefix>
                <UserGroupIcon className="h-5 w-5" />
              </ListItemPrefix>
              Manage Users
            </ListItem>
            <ListItem onClick={() => { navigate('/courses'); closeDrawer(); }}>
              <ListItemPrefix>
                <AdjustmentsHorizontalIcon className="h-5 w-5" />
              </ListItemPrefix>
              Manage Courses
            </ListItem>
            <ListItem onClick={() => { navigate('/category'); closeDrawer(); }}>
              <ListItemPrefix>
                <WrenchScrewdriverIcon className="h-5 w-5" />
              </ListItemPrefix>
              Manage Category
            </ListItem>
            {/*  */}
            <hr className="my-2 border-blue-gray-50" />
            {/* Actions */}
            <ListItem onClick={() => { navigate('/new-course'); closeDrawer(); }}>
              <ListItemPrefix>
                <FolderPlusIcon className="h-5 w-5" />
              </ListItemPrefix>
              Add Course
            </ListItem>
            <ListItem onClick={() => { navigate('/register'); closeDrawer(); }}>
              <ListItemPrefix>
                <UserPlusIcon className="h-5 w-5" />
              </ListItemPrefix>
              Add User
            </ListItem>
            <ListItem onClick={() => { navigate('/curriculum'); closeDrawer(); }}>
              <ListItemPrefix>
                <SquaresPlusIcon className="h-5 w-5" />
              </ListItemPrefix>
              Add Curriculum
            </ListItem>
            <ListItem onClick={() => { navigate('/schedule'); closeDrawer(); }}>
              <ListItemPrefix>
                <CalendarDaysIcon className="h-5 w-5" />
              </ListItemPrefix>
              Add Schedule
            </ListItem>
            {/*  */}
            <hr className="my-2 border-blue-gray-50" />
            {/* for logout */}
            <ListItem onClick={() => { localStorage.removeItem('token'); navigate('/login') }}>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </>
  );
}
export default SidebarWithBurgerMenu