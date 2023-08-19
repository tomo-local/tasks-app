import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react/components/Menu'
import IconButton from '@material-tailwind/react/components/IconButton'
import Avatar from '@material-tailwind/react/components/Avatar'

export default function UserMenu() {
  return (
    <div className="w-12 ">
      <Menu>
        <MenuHandler>
          <IconButton
            variant="text"
            color="white"
            className="m-0.5 rounded-full border"
          >
            <Avatar src="/img/face-2.jpg" alt="avatar" className="w-6 h-6" />
          </IconButton>
        </MenuHandler>
        <MenuList className="w-[320px] left-[550px]">
          <MenuItem className="w-40">Menu Item 1</MenuItem>
          <MenuItem className="w-40">Menu Item 2</MenuItem>
          <MenuItem className="w-40">Menu Item 3</MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
}
