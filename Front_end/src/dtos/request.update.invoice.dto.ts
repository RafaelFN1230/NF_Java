export interface RequestUpdateInvoiceDto {
  token: string | undefined;
  invoices: InvoicesUpdates[];
}

export interface InvoicesUpdates {
  purchase_id: string;
  action: string;
}
