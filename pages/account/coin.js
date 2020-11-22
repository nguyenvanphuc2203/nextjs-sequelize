import React, { useState } from 'react';

import Link from 'next/link';
import Router, { useRouter } from 'next/router';

/* utils */
import { absoluteUrl, authMiddlewareRole, getAppCookies } from '../../middleware/utils';

/* components */
import Layout from '../../components/layout/Layout';
import { Table, Container, Button, Message, Input, Segment, Divider } from 'semantic-ui-react'

function Coin(props) {
	const router = useRouter();
	const { origin, user, deposits } = props;

	return (
		<Layout
			title="Next.js with Sequelize | User Page"
			url={`${origin}${router.asPath}`}
			origin={origin}
      		user={user}
		>
			<Container>
				<Segment attached>Dogs are one type of animal.</Segment>

				<Segment color='teal'>
					<Message warning>
						<Message.Header>Vui lòng chuyển khoản vào STK với nội dung bên dưới:</Message.Header>
						<p>Tỉ lệ quy đổi 1000 VNĐ = 1000 XU.</p>
					</Message>

					<Segment color='teal' textAlign="center">
						<Input
							size='huge'
							action={{
								color: 'teal',
								labelPosition: 'right',
								icon: 'copy',
								content: 'Copy',
							}}
							defaultValue='NAPTIEN 291'
						/>
						<br/>
						<br/>
						<Button loading>Loading</Button>
					</Segment>

				</Segment>

				<Segment color='teal' textAlign="center">
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
							{ deposits && deposits.data.map(history => 
								<Table.Row>
									<Table.Cell>{history.id}</Table.Cell>
									<Table.Cell >{history.amount}</Table.Cell>
									<Table.Cell >{history.gate}</Table.Cell>
									<Table.Cell >{history.SoThamChieu}</Table.Cell>
									<Table.Cell positive>Thành công</Table.Cell>
								</Table.Row>
							)}
						</Table.Body>
					</Table>
					<Button.Group>
						<Button labelPosition='left' icon='left chevron' content='1' />
						<Button content='2' />
						<Button labelPosition='right' icon='right chevron' content='3' />
					</Button.Group>
				</Segment>
			</Container>
		</Layout>
	);
}

/* getServerSideProps */
export async function getServerSideProps(context) {

	authMiddlewareRole(context); // protect router

	const { query, req } = context;
	const { nextPage } = query;
	const { origin } = absoluteUrl(req);

	const referer = req.headers.referer || '';
	const { token } = getAppCookies(req);

	const baseApiUrl = `${origin}/api`;

	const depositsApi = await fetch(`${baseApiUrl}/history/deposits`, {
		headers: {
		  authorization: token || '',
		},
	});
	const deposits = await depositsApi.json();
	console.log(deposits)
	return {
		props: {
			origin,
			referer,
			deposits,
		},
	};
}

export default Coin;
