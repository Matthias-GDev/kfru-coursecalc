//Imports
import React, { Component } from 'react'

//CSS
import '../css/Frame.css';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

//Material UI
import Slider from '@material-ui/core/Slider';

export class frame extends Component {
    
    constructor(props){
        super(props)
        this.handleOnChangeProvisionSupport=this.handleOnChangeProvisionSupport.bind(this)
        this.handleOnChangeProvisionCourse=this.handleOnChangeProvisionCourse.bind(this)
        this.handleOnChangeProvisionCourseActual=this.handleOnChangeProvisionCourseActual.bind(this)
        this.handleOnChangeProvisionReview=this.handleOnChangeProvisionReview.bind(this)

        this.handleOnChangeTeilnehmer=this.handleOnChangeTeilnehmer.bind(this)
        this.handleOnChangeFirmenMitarbeiter=this.handleOnChangeFirmenMitarbeiter.bind(this)
        this.handleOnChangeStudent=this.handleOnChangeStudent.bind(this)

        this.handleOnChangeMonatlichTeilnehmer=this.handleOnChangeMonatlichTeilnehmer.bind(this)
        this.handleOnChangeMonatlichFirmenMitarbeiter=this.handleOnChangeMonatlichFirmenMitarbeiter.bind(this)
        this.handleOnChangeMonatlichStudent=this.handleOnChangeMonatlichStudent.bind(this)

        this.handleOnChangeRabatteTeilnehmer=this.handleOnChangeRabatteTeilnehmer.bind(this)
        this.handleOnChangeRabatteFirmenMitarbeiter=this.handleOnChangeRabatteFirmenMitarbeiter.bind(this)
        this.handleOnChangeRabatteStudent=this.handleOnChangeRabatteStudent.bind(this)

        this.handleOnChangeTab=this.handleOnChangeTab.bind(this)
        this.handleOnChangeIndex=this.handleOnChangeIndex.bind(this)


        this.state={
            slider_value_provision_course:33,
            slider_value_provision_course_max:50,

            slider_value_provision_course_actual:5,
            slider_value_provision_course_actual_max:20,

            slider_value_provision_course_support:0,
            slider_value_provision_course_support_max:20,

            slider_value_provision_course_reviews:0,
            slider_value_provision_course_reviews_max:20,

            slider_value_teilnehmer:10,
            slider_value_teilnehmer_max:3000,
            slider_value_firmenmitarbeiter:10,
            slider_value_firmenmitarbeiter_max:3000,
            slider_value_studenten:10,
            slider_value_studenten_max:3000,

            //Monatlich
            teilnehmer_monatlich_rate:359,
            firmenmitarbeiter_monatlich_rate:359,
            student_monatlich_rate:359,
            //%
            teilnehmer_monatlich_rabatt:31,
            firmenmitarbeiter_monatlich_rabatt:44,
            student_monatlich_rabatt:90,

            indexvalue:0
        }
    }

    //Fix
    handleOnChangeProvisionCourse(event,value){
        this.setState({ slider_value_provision_course:value });
    }

    handleOnChangeProvisionCourseActual(event,value){
        this.setState({ slider_value_provision_course_actual:value });
    }

    handleOnChangeProvisionSupport(event,value){
        this.setState({ slider_value_provision_course_support:value });
    }

    handleOnChangeProvisionReview(event,value){
        this.setState({ slider_value_provision_course_reviews:value });
    }

    //Variable Teilnehmer
    handleOnChangeTeilnehmer(event,value){
        this.setState({slider_value_teilnehmer:value });
    }
    handleOnChangeFirmenMitarbeiter(event,value){
        this.setState({slider_value_firmenmitarbeiter:value });
    }
    handleOnChangeStudent(event,value){
        this.setState({slider_value_studenten:value });
    }

    //OnChangeMonatlich
    handleOnChangeMonatlichTeilnehmer(event){
        this.setState({teilnehmer_monatlich_rate:event.target.value });
    }

    handleOnChangeMonatlichFirmenMitarbeiter(event){
        this.setState({firmenmitarbeiter_monatlich_rate:event.target.value });
    }

    handleOnChangeMonatlichStudent(event){
        this.setState({student_monatlich_rate:event.target.value });
    }

    //%
    handleOnChangeRabatteTeilnehmer(event,value){
        this.setState({teilnehmer_monatlich_rabatt:event.target.value });
    }
    handleOnChangeRabatteFirmenMitarbeiter(event,value){
        this.setState({firmenmitarbeiter_monatlich_rabatt:event.target.value });
    }
    handleOnChangeRabatteStudent(event,value){
        this.setState({student_monatlich_rabatt:event.target.value });
    }

    handleOnChangeTab(){
        console.log("change Tab")
        
    }

    handleOnChangeIndex(){
        console.log("change Index")
        this.setState({indexvalue:1})
    }


    render() {

        const {slider_value_teilnehmer,slider_value_firmenmitarbeiter,slider_value_studenten,slider_value_provision_course,slider_value_provision_course_actual,slider_value_provision_course_support,slider_value_provision_course_reviews} = this.state

        const teilnehmerpreis=((this.state.teilnehmer_monatlich_rate*4)-((this.state.teilnehmer_monatlich_rate*4/100)*this.state.teilnehmer_monatlich_rabatt)).toFixed(2) 
        const teilnehmerpreis_print=teilnehmerpreis+' ???'

        const firmenmitarbeiterpreis=((this.state.firmenmitarbeiter_monatlich_rate*4)-((this.state.firmenmitarbeiter_monatlich_rate*4/100)*this.state.firmenmitarbeiter_monatlich_rabatt)).toFixed(2) 
        const firmenmitarbeiterpreis_print=firmenmitarbeiterpreis+' ???'

        const studentenpreis=((this.state.student_monatlich_rate*4)-((this.state.student_monatlich_rate*4/100)*this.state.student_monatlich_rabatt)).toFixed(2) 
        const studentenpreis_print=studentenpreis+' ???'

        //const total=((teilnehmerpreis*slider_value_teilnehmer)+(firmenmitarbeiterpreis*slider_value_firmenmitarbeiter)+(studentenpreis*slider_value_studenten))
        const totalprovision=((slider_value_teilnehmer*(teilnehmerpreis/100*slider_value_provision_course))+(slider_value_firmenmitarbeiter*(firmenmitarbeiterpreis/100*slider_value_provision_course))+(slider_value_studenten*(studentenpreis/100*slider_value_provision_course))).toFixed(2)
        const totalkursaktualisierung=((slider_value_teilnehmer*(teilnehmerpreis/100*slider_value_provision_course_actual))+(slider_value_firmenmitarbeiter*(firmenmitarbeiterpreis/100*slider_value_provision_course_actual))+(slider_value_studenten*(studentenpreis/100*slider_value_provision_course_actual))).toFixed(2)
        const totalsupport=((slider_value_teilnehmer*(teilnehmerpreis/100*slider_value_provision_course_support))+(slider_value_firmenmitarbeiter*(firmenmitarbeiterpreis/100*slider_value_provision_course_support))+(slider_value_studenten*(studentenpreis/100*slider_value_provision_course_support))).toFixed(2)
        const totalreview=((slider_value_teilnehmer*(teilnehmerpreis/100*slider_value_provision_course_reviews))+(slider_value_firmenmitarbeiter*(firmenmitarbeiterpreis/100*slider_value_provision_course_reviews))+(slider_value_studenten*(studentenpreis/100*slider_value_provision_course_reviews))).toFixed(2)

        const total=(Number(totalprovision)+Number(totalkursaktualisierung)+Number(totalsupport)+Number(totalreview)).toFixed(2)

        return (
            <Container>
                <br/>
                    <div id='frame'>
                        <div id='frame-topline' className='d-flex justify-content-center align-items-center'>
                            <Row >
                                <Col>
                                    <figure className="text-center">
                                        <>
                                            <p id='frame-headline'>Kurs Kalkulator</p>
                                            <figcaption className="blockquote-footer">
                                            <cite title="Source Title">Knowledge Foundation</cite>
                                            </figcaption>
                                        </>
                                    </figure>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col xs={1}></Col>
                            <Col>
                                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                                    <Tab eventKey="home" title="Kurs">
                                          <div id='frame-content'>
                                            <Row>
                                                <Col xs={12}>
                                                    <h3>Beispiel Kurs: <b>React&Redux</b></h3>
                                                    <Row>
                                                        <h6>Kunde: <b>Teilnehmer</b></h6>
                                                        <Col xs={12} sm={4} md={3} lg={2} style={{backgroundColor:'white'}}>
                                                            Dauer ??:
                                                            <Form.Control type="text" placeholder="" readOnly value='4 Monate' />
                                                        </Col>
                                                        <Col xs={12} sm={4} md={3} lg={2} style={{backgroundColor:'white'}}>
                                                            Monatlich:
                                                            <Form.Control type="text" placeholder="" onChange={this.handleOnChangeMonatlichTeilnehmer} value={this.state.teilnehmer_monatlich_rate} />
                                                        </Col>
                                                        <Col xs={12} sm={4} md={3} lg={2} style={{backgroundColor:'white'}}>
                                                            4-Monate:
                                                            <Form.Control type="text" placeholder="" readOnly value={(this.state.teilnehmer_monatlich_rate*4) +' ???'} />
                                                        </Col>
                                                        <Col xs={12} sm={4} md={3} lg={2} style={{backgroundColor:'white'}}>
                                                            Rabatt in %:
                                                            <Form.Control type="text" placeholder="" onChange={this.handleOnChangeRabatteTeilnehmer} value={this.state.teilnehmer_monatlich_rabatt} />
                                                        </Col>
                                                        <Col xs={12} sm={4} md={3} lg={2} style={{backgroundColor:'white'}}>
                                                            Endpreis:
                                                            <Form.Control type="text" placeholder="" readOnly value={teilnehmerpreis_print} />
                                                        </Col>
                                                    </Row>
                                                    <hr/>
                                                    <Row>
                                                        <h6>Kunde: <b>Firmen Mitarbeiter</b></h6>
                                                        <Col xs={12} sm={4} md={3} lg={2} style={{backgroundColor:'white'}}>
                                                            Dauer ??:
                                                            <Form.Control type="text" placeholder="" readOnly value='4 Monate' />
                                                        </Col>
                                                        <Col xs={12} sm={4} md={3} lg={2} style={{backgroundColor:'white'}}>
                                                            Monatlich:
                                                            <Form.Control type="text" placeholder="" onChange={this.handleOnChangeMonatlichFirmenMitarbeiter} value={this.state.firmenmitarbeiter_monatlich_rate} />
                                                        </Col>
                                                        <Col xs={12} sm={4} md={3} lg={2} style={{backgroundColor:'white'}}>
                                                            4-Monate:
                                                            <Form.Control type="text" readOnly placeholder="" value={(this.state.firmenmitarbeiter_monatlich_rate*4) +' ???'} />
                                                        </Col>
                                                        <Col xs={12} sm={4} md={3} lg={2} style={{backgroundColor:'white'}}>
                                                            Rabatt in %:
                                                            <Form.Control type="text" placeholder="" onChange={this.handleOnChangeRabatteFirmenMitarbeiter} value={this.state.firmenmitarbeiter_monatlich_rabatt} />
                                                        </Col>
                                                        <Col xs={12} sm={4} md={3} lg={2} style={{backgroundColor:'white'}}>
                                                            Endpreis:
                                                            <Form.Control type="text" placeholder="" readOnly value={firmenmitarbeiterpreis_print} />
                                                        </Col>
                                                    </Row>
                                                    <hr/>
                                                    <Row>
                                                        <h6>Kunde: <b>Student</b></h6>
                                                        <Col xs={12} sm={4} md={3} lg={2} readOnly style={{backgroundColor:'white'}}>
                                                            Dauer ??:
                                                            <Form.Control type="text" readOnly placeholder="" value='4 Monate' />
                                                        </Col>
                                                        <Col xs={12} sm={4} md={3} lg={2} style={{backgroundColor:'white'}}>
                                                            Monatlich:
                                                            <Form.Control type="text" placeholder="" onChange={this.handleOnChangeMonatlichStudent} value={this.state.student_monatlich_rate} />
                                                        </Col>
                                                        <Col xs={12} sm={4} md={3} lg={2} style={{backgroundColor:'white'}}>
                                                            4-Monate:
                                                            <Form.Control type="text" readOnly placeholder="" value={(this.state.student_monatlich_rate*4) +' ???'} />
                                                        </Col>
                                                        <Col xs={12} sm={4} md={3} lg={2} style={{backgroundColor:'white'}}>
                                                            Rabatt in %:
                                                            <Form.Control type="text" placeholder="" onChange={this.handleOnChangeRabatteStudent} value={this.state.student_monatlich_rabatt} />
                                                        </Col>
                                                        <Col xs={12} sm={4} md={3} lg={2} style={{backgroundColor:'white'}}>
                                                            Endpreis:
                                                            <Form.Control type="text" placeholder="" readOnly value={studentenpreis_print} />
                                                        </Col>
                                                    </Row>
                                                    <hr/>
                                                    <h6>M??gliche Kurs Provisionen</h6>
                                                    <Row>
                                                        <Col>
                                                            <h5>{this.state.slider_value_provision_course}% - <b>Online Kurs</b></h5>
                                                        </Col>
                                                        <Col>
                                                            <Slider
                                                            onChange={this.handleOnChangeProvisionCourse}
                                                            value={this.state.slider_value_provision_course}
                                                            aria-labelledby="discrete-slider-always"
                                                            step={1}
                                                            max={this.state.slider_value_provision_course_max}
                                                            valueLabelDisplay="on"/>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <h5>{this.state.slider_value_provision_course_actual}% - <b>Kurs Aktualisierung</b></h5>
                                                        </Col>
                                                        <Col> 
                                                        <Slider
                                                            onChange={this.handleOnChangeProvisionCourseActual}
                                                            value={this.state.slider_value_provision_course_actual}
                                                            aria-labelledby="discrete-slider-always"
                                                            step={1}
                                                            max={this.state.slider_value_provision_course_actual_max}
                                                            valueLabelDisplay="on"/>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <h5>{this.state.slider_value_provision_course_reviews}% -  <b>Reviews/Projektpr??fungen</b></h5>
                                                        </Col>
                                                        <Col><Slider
                                                            onChange={this.handleOnChangeProvisionReview}
                                                            value={this.state.slider_value_provision_course_reviews}
                                                            aria-labelledby="discrete-slider-always"
                                                            step={1}
                                                            max={this.state.slider_value_provision_course_reviews_max}
                                                            valueLabelDisplay="on"
                                                            /></Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <h5>{this.state.slider_value_provision_course_support}% -  <b>Support</b></h5>
                                                        </Col>
                                                        <Col><Slider
                                                            onChange={this.handleOnChangeProvisionSupport}
                                                            value={this.state.slider_value_provision_course_support}
                                                            aria-labelledby="discrete-slider-always"
                                                            step={1}
                                                            max={this.state.slider_value_provision_course_support_max}
                                                            valueLabelDisplay="on"
                                                            /></Col>
                                                    </Row>
                                                    <hr/>
                                                    <Row>
                                                        <p>Simulation - Teilnehmer im Jahr</p>
                                                        <Col>
                                                            <h5>Teilnehmer: {this.state.slider_value_teilnehmer}</h5>
                                                        </Col>
                                                        <Col><Slider
                                                            onChange={this.handleOnChangeTeilnehmer}
                                                            value={this.state.slider_value_teilnehmer}
                                                            aria-labelledby="discrete-slider-always"
                                                            step={5}
                                                            max={this.state.slider_value_teilnehmer_max}
                                                            valueLabelDisplay="on"
                                                            />
                                                        </Col>
                                                    </Row><br/>
                                                    <Row>
                                                        <Col>
                                                            <h5>Firmen Mitarbeiter: {this.state.slider_value_firmenmitarbeiter}</h5>
                                                        </Col>
                                                        <Col><Slider
                                                            onChange={this.handleOnChangeFirmenMitarbeiter}
                                                            value={this.state.slider_value_firmenmitarbeiter}
                                                            aria-labelledby="discrete-slider-always"
                                                            step={5}
                                                            max={this.state.slider_value_firmenmitarbeiter_max}
                                                            valueLabelDisplay="on"
                                                            />
                                                        </Col>
                                                    </Row><br/>
                                                    <Row>
                                                        <Col>
                                                            <h5>Studenten: {this.state.slider_value_studenten}</h5>
                                                        </Col>
                                                        <Col><Slider
                                                            onChange={this.handleOnChangeStudent}
                                                            value={this.state.slider_value_studenten}
                                                            aria-labelledby="discrete-slider-always"
                                                            step={5}
                                                            max={this.state.slider_value_studenten_max}
                                                            valueLabelDisplay="on"
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col xs={12}>
                                                    <Row>
                                                        <Col><h6>Kurs: {totalprovision} ???</h6></Col>
                                                        <Col><h6>Kurs Akt.: {totalkursaktualisierung} ???</h6></Col>
                                                        <Col><h6>Review {totalsupport} ???</h6></Col>
                                                        <Col><h6>Support {totalsupport} ???</h6></Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h1>Total: {total} ???</h1>
                                                </Col>
                                            </Row>
                     
                            
                                        </div>
                                    </Tab>
                                    {/*<Tab eventKey="profile" title="Risiko Professor">
                                         <div id='frame-content2'>
                                        
                                         </div>
                                    </Tab>*/}
                                </Tabs>
                            </Col>
                            <Col xs={1}></Col>
                        </Row>
                      
                      

                        <div id='frame-bottom' className='d-flex justify-content-end'>
                            <Row>
                                <Col>
                                    <div className='justify-content-end'>
                                        <p>?? MG</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                <br/><br/><br/><br/>
            </Container>
            
        )
    }
}

export default frame
