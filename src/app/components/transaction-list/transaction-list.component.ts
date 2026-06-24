import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';
import { ErrorHandler } from '../../utils/error-handler';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
  standalone: true,
  imports: []
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];
  error: string | null = null;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  private loadTransactions(): void {
    this.transactionService.getTransactions().subscribe({
      next: (transactions) => {
        this.transactions = transactions;
      },
      error: (err) => {
        this.error = ErrorHandler.handle(err);
      }
    });
  }
}