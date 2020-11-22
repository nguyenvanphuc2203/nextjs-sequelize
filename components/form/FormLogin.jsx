import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import Link from 'next/link';

function FormLogin({ props }) {
  const {
    onSubmitHandler,
    onChangeHandler,
    loading,
    stateFormData,
    stateFormError,
    stateFormMessage,
  } = props;

  return (
    <Grid textAlign='center' style={{ height: '40vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/sequelize.svg' /> Đăng nhập vào tài khoản
          </Header>
        {stateFormMessage.status === 'error' && (
          <Message warning>
            <Message.Header>{stateFormMessage.error}</Message.Header>
          </Message>
        )}
        <Form size='large' onSubmit={onSubmitHandler}>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              id="email"
              name="email"
              iconPosition='left'
              placeholder='E-mail address'
              onChange={onChangeHandler}
              readOnly={loading && true}
              value={stateFormData.email.value}
              error={!!stateFormError.email} />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              id="password"
              name="password"
              onChange={onChangeHandler}
              readOnly={loading && true}
              value={stateFormData.email.password}
              error={!!stateFormError.email} />
            <Button color='teal' fluid size='large'
              type="submit"
              loading={loading}>
                Đăng nhập
            </Button>
          </Segment>
        </Form>
        <Message warning>
          Chưa có tài khoản? 
          <Link
            href={{
              pathname: '/user/register',
            }}
          >
            <a>&nbsp; Đăng ký</a>
          </Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}
export default FormLogin;
