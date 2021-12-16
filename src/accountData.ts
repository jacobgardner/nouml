enum IndexType {
  Ascending,
  Descending,
  Text,
  Geospatial,
  Hashed,
}

interface Index {
  indexValues: Array<{
    key: string;
    type: IndexType;
  }>;
  unique?: boolean;
  partial?: boolean;
  sparse?: boolean;
  ttl?: number;
}

interface CollectionSchemaBase {
  name: string;
  notes?: string[];
  optional?: boolean;
  indexes?: Index[];
}

export interface StandaloneFieldItem extends CollectionSchemaBase {
  type: string;
}

export interface SubdocFieldItem extends CollectionSchemaBase {
  children: CollectionSchema[];
}

export type CollectionSchema = StandaloneFieldItem | SubdocFieldItem;

export interface CollectionModel {
  name: string;
  notes?: string[];
  schema: CollectionSchema;
}

export function isSubdoc(model: CollectionSchema): model is SubdocFieldItem {
  return !!(model as any).children;
}

export const accountModel: CollectionSchema = {
  name: 'Fields',
  notes: ['This is the collection for accounts'],
  children: [
    { name: '_id', type: 'ObjectId', notes: ['Auto-generated'] },
    { name: 'changeId', type: 'string' },
    { name: 'masterAccountId', type: 'string' },
    { name: 'unifiedAccountId', type: 'string' },
    { name: 'billingAccountId', type: 'string' },
    { name: 'toolkitHidden', type: 'boolean' },
    { name: 'termsVersionAccepted', type: 'string' },
    { name: 'isApproved', type: 'boolean' },
    { name: 'dateCreated', type: 'Date' },
    { name: 'dateOfEnrollment', type: 'Date' },
    { name: 'dateOfTrialExpiration', type: 'Date' },
    { name: 'dateOfNextRenewal', type: 'Date' },
    { name: 'dateOfGracePeriodExpiration', type: 'Date' },
    { name: 'dateOfInvoicePaymentPending', type: 'Date' },
    { name: 'dateOfInvoicePaymentPastDue', type: 'Date' },
    { name: 'dateOfCancellation', type: 'Date' },
    { name: 'paymentType', type: 'PaymentType' },
    {
      name: 'plan',
      optional: true,
      children: [
        { name: 'type', type: 'string' },
        { name: 'maxUsers', type: 'number', optional: true },
        { name: 'maxCandidates', type: 'number', optional: true },
        { name: 'maxOpenings', type: 'number' },
      ],
    },
    { name: 'isTrial', type: 'boolean' },
    { name: 'isUnlimitedTrial', type: 'boolean' },
    { name: 'status', type: 'AccountStatus' },
    { name: 'subStatus', type: 'AccountSubStatus' },
    { name: 'numberOfActiveOpenings', type: 'number' },
    { name: 'numberOfCandidates', type: 'number' },
    {
      name: 'users[]',
      children: [
        { name: 'id', type: 'string' },
        { name: 'firstName', type: 'string' },
        { name: 'lastName', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'pending', type: 'boolean' },
        { name: 'dateCreated', type: 'Date' },
        { name: 'role', type: 'AccountUserRole' },
        { name: 'canAddJobOpenings', type: 'boolean' },
      ],
    },
    {
      name: 'sentEmails',
      children: [{ name: 'firstCandidateResult', type: 'boolean' }],
    },
    {
      name: 'audits[]',
      children: [
        {
          name: 'privateName',
          children: [
            { name: 'dateUpdate', type: 'Date' },
            { name: 'previousValue', type: 'string' },
            { name: 'newValue', type: 'string' },
            { name: 'updatedByUser', type: 'User' },
            {
              name: 'uupdatedByUserupdatedByUserupdatedByUserupdatedByUserpdatedByUser',
              type: 'User',
            },
          ],
        },
      ],
    },
    {
      name: 'featureFlags',
      children: [
        { name: 'excludeOptionalPII', type: 'boolean' },
        { name: 'enableCandidateReport', type: 'boolean' },
        { name: 'enableMLJobDirectory', type: 'boolean' },
        { name: 'experimentalActivities', type: 'boolean' },
        { name: 'enableJob2vec', type: 'boolean' },
      ],
    },
  ],
};
