import Link from 'next/link';
import {
  Container,
  Dropdown,
  Button,
  Image,
  Menu,
  Icon,
  Label
} from 'semantic-ui-react'
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { logoutProfile } from '../../redux/actions/mainActions'

const HeaderComponent = ({ props }) => {
  const { user } = props;
  const profile = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const router = useRouter()

  const logout = () => {
    dispatch(logoutProfile());
    Cookies.remove('token');
    router.push('/user/login')
  }
  console.log('profile',profile)
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='https://react.semantic-ui.com/logo.png' style={{ marginRight: '1.5em' }} />
          Project Name
        </Menu.Item>
        <Menu.Item as='a'><Link href="/">Home</Link></Menu.Item>

        <Dropdown item simple text='Menu'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {profile ? (
          <>
            <Menu.Item as='a' position='right'><Link href="/account/coin">
              <Button as='div' labelPosition='left' >
                <Label as='a' basic>
                  { profile.coin && profile.coin.toLocaleString()}
                </Label>
                <Button icon color="green">
                  <Icon name='money bill alternate' />
                </Button>
              </Button>
            </Link>
            </Menu.Item>
            <Dropdown text={<img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' style={{ borderRadius: '50%' }} />} pointing className='link item'>
              <Dropdown.Menu>
                <Link href={{ pathname: '/account/profile' }}>
                  <Dropdown.Item>Tải khoản </Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logout} >Đăng xuất</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        ) :
          (
            <Menu.Item position='right'>
              <Link href={{ pathname: '/user/login' }}>
                <Button color='teal'>
                  <Icon name='user' /> Tham gia
                </Button>
              </Link>
            </Menu.Item>
          )}
      </Container>
    </Menu>
  );
};

export default connect((state) => state)(HeaderComponent);