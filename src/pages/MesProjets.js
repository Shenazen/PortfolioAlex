import React from 'react';
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink
} from 'mdbreact';
import './HomePage.css';

class MesProjets extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
        <div className='mt-3 mb-5'>
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md='10'
                className='mx-auto float-none white z-depth-1 py-2 px-2'
              >
                <MDBCardBody className='text-center'>
                  <h2 className='h2-responsive mb-4'>
                    <strong className='font-weight-bold'>
                      Mes projets publics
                    </strong>
                  </h2>
                  <hr className='my-5' />
                  <MDBRow />
                    <MDBRow id='categories'>
                        <MDBCol md='4'>
                            <MDBAnimation reveal type='fadeInLeft'>
                            <MDBCard cascade className='my-3 grey lighten-4'>
                                <MDBCardImage
                                cascade
                                className='img-fluid'
                                src='https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg'
                                />
                                <MDBCardBody cascade className='text-center'>
                                <MDBCardTitle>
                                    <MDBIcon
                                    icon='css3'
                                    brand
                                    className='pink-text pr-2'
                                    />
                                    <strong>CSS</strong>
                                </MDBCardTitle>
                                <MDBCardText>
                                    Animations, colours, shadows, skins and many more!
                                    Get to know all our css styles in one place.
                                </MDBCardText>
                                <MDBNavLink
                                    tag='button'
                                    to='/css'
                                    color='mdb-color'
                                    className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                                    onClick={this.scrollToTop}
                                >
                                    Voir plus
                                </MDBNavLink>
                                </MDBCardBody>
                            </MDBCard>
                            </MDBAnimation>
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBAnimation reveal type='fadeInDown'>
                            <MDBCard cascade className='my-3 grey lighten-4'>
                                <MDBCardImage
                                cascade
                                className='img-fluid'
                                src='https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg'
                                />
                                <MDBCardBody cascade className='text-center'>
                                <MDBCardTitle>
                                    <MDBIcon icon='cubes' className='blue-text pr-2' />
                                    <strong>COMPONENTS</strong>
                                </MDBCardTitle>
                                <MDBCardText>
                                    Ready-to-use components that you can use in your
                                    applications. Both basic and extended versions!
                                </MDBCardText>
                                <MDBNavLink
                                    tag='button'
                                    to='/components'
                                    color='mdb-color'
                                    className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                                    onClick={this.scrollToTop}
                                >
                                    More
                                </MDBNavLink>
                                </MDBCardBody>
                            </MDBCard>
                            </MDBAnimation>
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBAnimation reveal type='fadeInRight'>
                            <MDBCard cascade className='my-3 grey lighten-4'>
                                <MDBCardImage
                                cascade
                                className='img-fluid'
                                src='https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg'
                                />
                                <MDBCardBody cascade className='text-center'>
                                <MDBCardTitle>
                                    <MDBIcon icon='code' className='green-text pr-2' />
                                    <strong>ADVANCED</strong>
                                </MDBCardTitle>
                                <MDBCardText>
                                    Advanced components such as charts, carousels,
                                    tooltips and popovers. All in Material Design
                                    version.
                                </MDBCardText>

                                <MDBNavLink
                                    tag='button'
                                    to='/advanced'
                                    color='mdb-color'
                                    className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                                    onClick={this.scrollToTop}
                                >
                                    More
                                </MDBNavLink>
                                </MDBCardBody>
                            </MDBCard>
                            </MDBAnimation>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow id='categories'>
                        <MDBCol md='4'>
                            <MDBAnimation reveal type='fadeInLeft'>
                            <MDBCard cascade className='my-3 grey lighten-4'>
                                <MDBCardImage
                                cascade
                                className='img-fluid'
                                src='https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg'
                                />
                                <MDBCardBody cascade className='text-center'>
                                <MDBCardTitle>
                                    <MDBIcon
                                    icon='css3'
                                    brand
                                    className='pink-text pr-2'
                                    />
                                    <strong>CSS</strong>
                                </MDBCardTitle>
                                <MDBCardText>
                                    Animations, colours, shadows, skins and many more!
                                    Get to know all our css styles in one place.
                                </MDBCardText>
                                <MDBNavLink
                                    tag='button'
                                    to='/css'
                                    color='mdb-color'
                                    className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                                    onClick={this.scrollToTop}
                                >
                                    More
                                </MDBNavLink>
                                </MDBCardBody>
                            </MDBCard>
                            </MDBAnimation>
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBAnimation reveal type='fadeInDown'>
                            <MDBCard cascade className='my-3 grey lighten-4'>
                                <MDBCardImage
                                cascade
                                className='img-fluid'
                                src='https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg'
                                />
                                <MDBCardBody cascade className='text-center'>
                                <MDBCardTitle>
                                    <MDBIcon icon='cubes' className='blue-text pr-2' />
                                    <strong>COMPONENTS</strong>
                                </MDBCardTitle>
                                <MDBCardText>
                                    Ready-to-use components that you can use in your
                                    applications. Both basic and extended versions!
                                </MDBCardText>
                                <MDBNavLink
                                    tag='button'
                                    to='/components'
                                    color='mdb-color'
                                    className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                                    onClick={this.scrollToTop}
                                >
                                    More
                                </MDBNavLink>
                                </MDBCardBody>
                            </MDBCard>
                            </MDBAnimation>
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBAnimation reveal type='fadeInRight'>
                            <MDBCard cascade className='my-3 grey lighten-4'>
                                <MDBCardImage
                                cascade
                                className='img-fluid'
                                src='https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg'
                                />
                                <MDBCardBody cascade className='text-center'>
                                <MDBCardTitle>
                                    <MDBIcon icon='code' className='green-text pr-2' />
                                    <strong>ADVANCED</strong>
                                </MDBCardTitle>
                                <MDBCardText>
                                    Advanced components such as charts, carousels,
                                    tooltips and popovers. All in Material Design
                                    version.
                                </MDBCardText>

                                <MDBNavLink
                                    tag='button'
                                    to='/advanced'
                                    color='mdb-color'
                                    className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                                    onClick={this.scrollToTop}
                                >
                                    More
                                </MDBNavLink>
                                </MDBCardBody>
                            </MDBCard>
                            </MDBAnimation>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
        </div>
      </>
    );
  }
}

export default MesProjets;
