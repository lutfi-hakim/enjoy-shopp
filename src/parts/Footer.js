import React from 'react'

import Button from 'elements/Button'
import IconText from 'parts/IconText'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <IconText />
                        <p className="brand-tagline">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2">Category</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/category">Laptop</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/category">Handphone</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/category">Asesoris</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/category">Elektronik</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2">Contact us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="mailto:support@enjoys.com">support@enjoys.com</Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="tel:+622133445566">021 - 3344 - 5566</Button>
                            </li>
                            <li className="list-group-item">
                                <span>enjoyShoop, Kota Tangerang, Banten</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2020 - All rights reserved - enjoyShopp
                    </div>
                </div>
            </div>
        </footer>
    )
}
