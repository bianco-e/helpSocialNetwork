import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const ItemDetail = ({ modalShow, setModalShow, itemID, findItemById }) => {
  const {
    description,
    image,
    mobility,
    urgent,
    title,
    user,
    zone,
  } = findItemById(itemID);

  return (
    <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Card
          className="m-2"
          bg={`${urgent && "danger"}`}
          text={`${urgent && "white"}`}
        >
          <Image variant="top" src={image} alt={title} fluid />
          <Card.Body>
            <h6 className={`${urgent ? "bigText white" : "bigText"}`}>
              {title}
            </h6>
            <Card.Text>{description}</Card.Text>
            <Card.Text className="mediumText">Barrio: {zone}</Card.Text>
            <Card.Text className="mediumText">
              {mobility ? "Tiene movilidad" : "No tiene movilidad"}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="flex between">
              <small className="mediumText text-muted">
                <Link
                  className={`${urgent ? "white textDecoNone" : "mediumText"}`}
                  to="/"
                >
                  {user}
                </Link>
              </small>
              {urgent && <h6 className="white">[URGENTE]</h6>}
              <Button size="sm" variant="outline-light">
                Contactar
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </Modal.Body>
    </Modal>
  );
};

export default ItemDetail;
