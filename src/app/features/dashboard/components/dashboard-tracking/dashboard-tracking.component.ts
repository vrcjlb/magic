import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  orderID: string;
  billingName: string;
  date: string;
  total: string;
  paymentStatus: string;
  paymentMethod: string;
  viewDetails: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    orderID: '#SK2540',
    billingName: 'Neal Matthews',
    date: '07 Oct, 2019',
    total: '$400',
    paymentStatus: 'Paid',
    paymentMethod: 'Mastercard',
    viewDetails: 'View Details',
  },
  {
    orderID: '#SK2541',
    billingName: 'Jamal Burnett',
    date: '07 Oct, 2019',
    total: '$380',
    paymentStatus: 'Chargeback',
    paymentMethod: 'Visa',
    viewDetails: 'View Details',
  },
  {
    orderID: '#SK2542',
    billingName: 'Juan Mitchell',
    date: '06 Oct, 2019',
    total: '$384',
    paymentStatus: 'Paid',
    paymentMethod: 'Paypal',
    viewDetails: 'View Details',
  },
  {
    orderID: '#SK2543',
    billingName: 'Jamal Burnett',
    date: '05 Oct, 2019',
    total: '$412',
    paymentStatus: 'Paid',
    paymentMethod: 'Mastercard',
    viewDetails: 'View Details',
  },
  {
    orderID: '#SK2544',
    billingName: 'Barry Dick',
    date: '04 Oct, 2019',
    total: '$404',
    paymentStatus: 'Refund',
    paymentMethod: 'Visa',
    viewDetails: 'View Details',
  },
  {
    orderID: '#SK2545',
    billingName: 'Ronald Taylor',
    date: '04 Oct, 2019',
    total: '$392',
    paymentStatus: 'Paid',
    paymentMethod: 'Paypal',
    viewDetails: 'View Details',
  },
  {
    orderID: '#SK2541',
    billingName: 'Jamal Burnett',
    date: '07 Oct, 2019',
    total: '$380',
    paymentStatus: 'Chargeback',
    paymentMethod: 'Visa',
    viewDetails: 'View Details',
  },
  {
    orderID: '#SK2542',
    billingName: 'Juan Mitchell',
    date: '06 Oct, 2019',
    total: '$384',
    paymentStatus: 'Paid',
    paymentMethod: 'Paypal',
    viewDetails: 'View Details',
  },
  {
    orderID: '#SK2543',
    billingName: 'Jamal Burnett',
    date: '05 Oct, 2019',
    total: '$412',
    paymentStatus: 'Paid',
    paymentMethod: 'Mastercard',
    viewDetails: 'View Details',
  },
  {
    orderID: '#SK2544',
    billingName: 'Barry Dick',
    date: '04 Oct, 2019',
    total: '$404',
    paymentStatus: 'Refund',
    paymentMethod: 'Visa',
    viewDetails: 'View Details',
  },
  {
    orderID: '#SK2545',
    billingName: 'Ronald Taylor',
    date: '04 Oct, 2019',
    total: '$392',
    paymentStatus: 'Paid',
    paymentMethod: 'Paypal',
    viewDetails: 'View Details',
  },
  {
    orderID: '#SK2541',
    billingName: 'Jamal Burnett',
    date: '07 Oct, 2019',
    total: '$380',
    paymentStatus: 'Chargeback',
    paymentMethod: 'Visa',
    viewDetails: 'View Details',
  },
  {
    orderID: '#SK2542',
    billingName: 'Juan Mitchell',
    date: '06 Oct, 2019',
    total: '$384',
    paymentStatus: 'Paid',
    paymentMethod: 'Paypal',
    viewDetails: 'View Details',
  },
  {
    orderID: '#SK2543',
    billingName: 'Jamal Burnett',
    date: '05 Oct, 2019',
    total: '$412',
    paymentStatus: 'Paid',
    paymentMethod: 'Mastercard',
    viewDetails: 'View Details',
  },
  {
    orderID: '#SK2544',
    billingName: 'Barry Dick',
    date: '04 Oct, 2019',
    total: '$404',
    paymentStatus: 'Refund',
    paymentMethod: 'Visa',
    viewDetails: 'View Details',
  },
  {
    orderID: '#SK2545',
    billingName: 'Ronald Taylor',
    date: '04 Oct, 2019',
    total: '$392',
    paymentStatus: 'Paid',
    paymentMethod: 'Paypal',
    viewDetails: 'View Details',
  },
];

@Component({
  standalone: true,
  imports: [MatTableModule],
  selector: 'app-dashboard-tracking',
  templateUrl: './dashboard-tracking.component.html',
  styleUrls: ['./dashboard-tracking.component.scss'],
})
export class DashboardTrackingComponent {
  displayedColumns = [
    'orderID',
    'billingName',
    'date',
    'total',
    'paymentStatus',
    'paymentMethod',
    'viewDetails',
  ];
  dataSource = ELEMENT_DATA;
}
