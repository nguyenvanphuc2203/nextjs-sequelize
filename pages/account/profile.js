import React, { useState } from 'react';

import Link from 'next/link';
import Router, { useRouter } from 'next/router';

/* utils */
import { absoluteUrl } from '../../middleware/utils';

/* components */
import Layout from '../../components/layout/Layout';
import { Table, Container, Button, Menu, Input, Segment, Divider } from 'semantic-ui-react'

function Profile(props) {
    const router = useRouter();
    const { origin, user, users } = props;
    const [activeItem, setActiveItem] = useState('Profile');

    const handleItemClick = (e, { name }) => setActiveItem(name);
    return (
        <Layout
            title="Next.js with Sequelize | User Page"
            url={`${origin}${router.asPath}`}
            origin={origin}
            user={user}
        >
            <Container>
                <Menu pointing>
                    <Menu.Item
                        name='Profile'
                        active={activeItem === 'Profile'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='BM History'
                        active={activeItem === 'BM History'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='Via History'
                        active={activeItem === 'Via History'}
                        onClick={handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

                <Segment color='teal' textAlign="center">
                    {activeItem === 'Profile' &&
                        <>
                            <Divider horizontal>Lịch sử nạp tiền</Divider>
                            <Table celled selectable>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>#</Table.HeaderCell>
                                        <Table.HeaderCell>Số XU</Table.HeaderCell>
                                        <Table.HeaderCell>Nguồn</Table.HeaderCell>
                                        <Table.HeaderCell>Ghi chú</Table.HeaderCell>
                                        <Table.HeaderCell>Trạng thái</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>1</Table.Cell>
                                        <Table.Cell >1.000.000</Table.Cell>
                                        <Table.Cell >Vietcombank</Table.Cell>
                                        <Table.Cell >2929-1232</Table.Cell>
                                        <Table.Cell positive>Thành công</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>1</Table.Cell>
                                        <Table.Cell >100.000</Table.Cell>
                                        <Table.Cell >Vietcombank</Table.Cell>
                                        <Table.Cell >2929-1232</Table.Cell>
                                        <Table.Cell positive>Thành công</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            <Button.Group>
                                <Button labelPosition='left' icon='left chevron' content='1' />
                                <Button content='2' />
                                <Button labelPosition='right' icon='right chevron' content='3' />
                            </Button.Group>
                        </>
                    }
                    {activeItem === 'BM History' &&
                        <>
                            <Divider horizontal>Lịch sử mua BM</Divider>
                            <Table celled selectable>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>#</Table.HeaderCell>
                                        <Table.HeaderCell>Số XU</Table.HeaderCell>
                                        <Table.HeaderCell>Nguồn</Table.HeaderCell>
                                        <Table.HeaderCell>Ghi chú</Table.HeaderCell>
                                        <Table.HeaderCell>Trạng thái</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>1</Table.Cell>
                                        <Table.Cell >1.000.000</Table.Cell>
                                        <Table.Cell >Vietcombank</Table.Cell>
                                        <Table.Cell >2929-1232</Table.Cell>
                                        <Table.Cell positive>Thành công</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>1</Table.Cell>
                                        <Table.Cell >100.000</Table.Cell>
                                        <Table.Cell >Vietcombank</Table.Cell>
                                        <Table.Cell >2929-1232</Table.Cell>
                                        <Table.Cell positive>Thành công</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            <Button.Group>
                                <Button labelPosition='left' icon='left chevron' content='1' />
                                <Button content='2' />
                                <Button labelPosition='right' icon='right chevron' content='3' />
                            </Button.Group>
                        </>
                    }
                </Segment>
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

    const nextPageUrl = !isNaN(nextPage) ? `?nextPage=${nextPage}` : '';
    const baseApiUrl = `${origin}/api`;

    const usersApi = await fetch(`${baseApiUrl}/user${nextPageUrl}`);
    const users = await usersApi.json();

    return {
        props: {
            origin,
            referer,
            users,
        },
    };
}

export default Profile;
