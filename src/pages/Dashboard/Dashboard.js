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

        <Col className={'pl-0'}>
          <Card>
            <CardBody>
              <p>This is the body of the card.</p>
            </CardBody>
          </Card>
        </Col>

        <Col className={'pl-0'}>
          <Card>
            <CardBody>
              <p>This is the body of the card.</p>
            </CardBody>
          </Card>
        </Col>

        <Col className={'pl-0'}>
          <Card>
            <CardBody>
              <p>This is the body of the card.</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard
