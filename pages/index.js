import Link from 'next/link';

/* utils */
import { absoluteUrl } from '../middleware/utils';

/* components */
import Layout from '../components/layout/Layout';
import { Grid, Container, Message, Card, Table, Divider } from 'semantic-ui-react'

export default function Home(props) {
  const { user, categories, deposits, transactions, origin } = props;
  return (
    <Layout
      title="Next.js with Sequelize | Home Page"
      url={origin}
      origin={origin}
      user={user}
    >
      <Container>
        <Message positive>
          <Message.Header>Was this what you wanted?</Message.Header>
          <p>Did you know it's been a while?</p>
        </Message>
        <Card.Group>
          { categories && categories.data.map( category =>
            <Link href="/">
            <Card>
              <Card.Content>
                <Card.Header content={category.name} />
                <Card.Meta content='Musicians' />
                <Card.Description content={category.description} />
              </Card.Content>
            </Card>
          </Link>
          )}
        </Card.Group>


        <Grid>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Divider horizontal>Lịch sử nạp</Divider>
              <Table color={'teal'} >
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Người dùng</Table.HeaderCell>
                    <Table.HeaderCell>Xu</Table.HeaderCell>
                    <Table.HeaderCell>Cổng</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                   { deposits && deposits.data.map(deposit => 
                   <Table.Row>
                    <Table.Cell>{ deposit.author.last_name }</Table.Cell>
                    <Table.Cell>{ deposit.amount.toLocaleString() }</Table.Cell>
                    <Table.Cell>{ deposit.gate }</Table.Cell>
                  </Table.Row>
                  )}
                </Table.Body>
              </Table>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Divider horizontal>Lịch sử mua</Divider>
              <Table color={'teal'}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Người dùng</Table.HeaderCell>
                    <Table.HeaderCell>Xu</Table.HeaderCell>
                    <Table.HeaderCell>Cổng</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  { transactions && transactions.data.map(transaction => 
                   <Table.Row>
                    <Table.Cell>{ transaction.author.last_name }</Table.Cell>
                    <Table.Cell>{ transaction.amount.toLocaleString() }</Table.Cell>
                    <Table.Cell>{ transaction.product_category.name }</Table.Cell>
                  </Table.Row>
                  )}
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>

        </Grid>

      </Container>
    </Layout>
  );
}
/* getServerSideProps */
export async function getServerSideProps(context) {
  const { query, req } = context;
  const { nextPage } = query;
  const { origin } = absoluteUrl(req);

  const referer = req.headers.referer || '';

  const baseApiUrl = `${origin}/api`;

  const categoriesApi = await fetch(`${baseApiUrl}/category`);
  const categories = await categoriesApi.json();

  const depositsApi = await fetch(`${baseApiUrl}/deposit`);
  const deposits = await depositsApi.json();

  const transactionsApi = await fetch(`${baseApiUrl}/transaction`);
  const transactions = await transactionsApi.json();

  return {
    props: {
      origin,
      referer,
      categories,
      deposits,
      transactions
    },
  };
}
