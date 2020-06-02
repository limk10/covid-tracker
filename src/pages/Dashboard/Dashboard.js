import React, { useEffect, useState } from 'react'

import axios from '../../services/api'
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";

const Dashboard = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    populate()
  }, [])
  
  const populate = async () => {
    try {
      const { data: collection } = await axios.get('free-api?global=stats')
      setData(collection.results)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <Row>
        <span className={'lb-covid'}>
          COVID19
        </span>
      </Row>
      <Row className={'lb-geral'}>
        <b>Painel </b>
        Coronavírus
      </Row>
      <Row className={'lb-grey'}>
        Atualizado em: 25/05/2020 19:25
      </Row>

      <Row className={'mt-3'}>
        <Col className={'pl-0'}>
          <Card>
            <CardBody>
              <p>Casos Recuperados</p>
              <p>153.833</p>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardBody>
              <p>This is the body of the card.</p>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardBody>
              <p>This is the body of the card.</p>
            </CardBody>
          </Card>
        </Col>

        <Col className={'pr-0'}>
          <Card>
            <CardBody>
              <p>This is the body of the card.</p>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className={'mt-4'}>
        <Col className={'pl-0 pr-0'}>
          <Card>
            <CardBody>
              <p>Síntese de casos, óbitos, incidência e mortalidade</p>
            </CardBody>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </Col>
      </Row>

    </>
  )
}

export default Dashboard
