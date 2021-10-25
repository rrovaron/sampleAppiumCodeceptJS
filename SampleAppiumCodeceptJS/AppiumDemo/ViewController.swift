//
//  ViewController.swift
//  AppiumDemo
//
//  Created by Rodrigo Rovaron on 11/12/19.
//  Copyright © 2019 com.rrovaron. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var txtNumber1: UITextField!
    @IBOutlet weak var txtNumber2: UITextField!
    @IBOutlet weak var txtResult: UILabel!

    @IBAction func onSumTouchUpInside(_ sender: Any) {

        let value1 = Int(txtNumber1.text ?? "0") ?? 0
        let value2 = Int(txtNumber2.text ?? "0") ?? 0

        let result = value1 + value2
        txtResult.text = "Result is \(result)"
    }

}
