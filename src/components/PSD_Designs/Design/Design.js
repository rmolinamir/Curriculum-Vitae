import React, { Component } from 'react';
// CSS
import classes from './Design.module.css';
// JSX
import Modal from 'react-png-modal';
import Button from '../../UI/Button/Button';
import Gallery from '../../UI/Gallery/Gallery';
import Separator from '../../UI/Separator/Separator';
import { Slider, Slide } from '../../UI/Slider/';
import ImageFadeIn from '../../UI/ImageFadeIn/ImageFadeIn';
import Title from '../Title/Title';
import InfoSection from '../InfoSection/InfoSection';

class Design extends Component {
  state = {
    bIsModalOpen: false
  }

  openModal = () => {
    this.setState({
      bIsModalOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      bIsModalOpen: false
    })
  }

  render() {
    const slides = this.props.images ? 
    (
      this.props.images.map((image, index) => {
        return (
          <Slide key={index}>
            <div>
              <ImageFadeIn noWrapper src={image} />
            </div>
          </Slide>
        );
      })
    )
    : null;
    return (
      <>
        <div className={classes.Container}>
          <div className={classes.Gallery}>
            <Gallery style={{borderRadius: '15px'}}>
              <Button
                type='default'
                clicked={this.openModal}
                className={classes.Fullscreen}>Watch Fullscreen</Button>
              <Slider sticky>
                {slides}
              </Slider>
            </Gallery>
          </div>
          <div style={{order: this.props.order}} className={classes.Information}>
            <div className={classes.Header}>
              <div className={classes.CategoryContainer}>
                <small className={classes.Category}>{this.props.company}</small>
              </div>
              <Title>{this.props.title}</Title>
            </div>
            <Separator />
            <InfoSection 
              title={this.props.title}
              logoTitle={this.props.company}
              src={this.props.logo}
              header='About the design'>
              <div>
                <p>{this.props.description}</p>
              </div>
            </InfoSection>
          </div>
          <Modal 
            transparent
            open={this.state.bIsModalOpen} 
            closeModal={this.closeModal}>
            <Slider showOnlyActive disableNav>
              {this.props.images.map((image, index) => {
                return (
                  <Slide key={index}>
                    <div className={classes.FullscreenContainer}>
                      <ImageFadeIn className={classes.FullscreenImage} draggable='false' style={{position: 'relative'}} noWrapper src={image} />
                    </div>
                  </Slide>
                );
              })}
            </Slider>
          </Modal>
        </div>
        <Separator />
      </>
    );
  }
}

export default Design;