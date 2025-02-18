const ContactSection = () => {
    return (
        <section data-bs-version="5.1" className="form5 cid-uB6StPuHiB" id="form5-o">
            <div className="container">
                <div className="mbr-section-head">
                    <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                        <strong>Связь с нами</strong>
                    </h3>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                        <form action="https://" method="POST" className="mbr-form form-with-styler" data-form-title="Form Name">
                            <input type="hidden" name="email" data-form-email="true" value="N3n/r8VM1Ygpy+M74m2CO1SdC1+LcSEYLGXvyeMBsKXXrbdWI+FEJQisxQswnLBqidZKBz+G+hdoABEcbairDi2te4PrZQf/Nh+W2k+/7k61vvyj/wFPbLLZRrq0QCn+" />
                            <div className="row">
                                <div hidden="hidden" data-form-alert="" className="alert alert-success col-12">Спасибо за заполнение заявки!</div>
                                <div hidden="hidden" data-form-alert-danger="" className="alert alert-danger col-12">
                                    Oops...! some problem!
                                </div>
                            </div>
                            <div className="dragArea row">
                                <div className="col-md col-sm-12 form-group mb-3" data-for="name">
                                    <input type="text" name="name" placeholder="Имя" data-form-field="name" className="form-control" value="" id="name-form5-o" />
                                </div>
                                <div className="col-md col-sm-12 form-group mb-3" data-for="email">
                                    <input type="email" name="email" placeholder="E-mail" data-form-field="email" className="form-control" value="" id="email-form5-o" />
                                </div>
                                <div className="col-12 form-group mb-3" data-for="textarea">
                                    <textarea name="textarea" placeholder="Сообщение" data-form-field="textarea" className="form-control" id="textarea-form5-o"></textarea>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                                    <button type="submit" className="btn btn-info display-4">Send message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
