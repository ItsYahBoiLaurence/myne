import { FieldMetadataItem } from '@/object-metadata/types/FieldMetadataItem';
import {
  FieldActorForInputValue,
  FieldAddressValue,
  FieldEmailsValue,
  FieldLinksValue,
  FieldPhonesValue,
  FieldRichTextV2Value,
} from '@/object-record/record-field/types/FieldMetadata';
import { COMPOSITE_FIELD_SUB_FIELD_LABELS } from '@/settings/data-model/constants/CompositeFieldSubFieldLabel';
import { ImportedStructuredRow } from '@/spreadsheet-import/types';
import { isNonEmptyString } from '@sniptt/guards';
import { isDefined } from 'twenty-shared/utils';
import { z } from 'zod';
import { FieldMetadataType } from '~/generated-metadata/graphql';
import { castToString } from '~/utils/castToString';
import { convertCurrencyAmountToCurrencyMicros } from '~/utils/convertCurrencyToCurrencyMicros';

type BuildRecordFromImportedStructuredRowArgs = {
  importedStructuredRow: ImportedStructuredRow<any>;
  fields: FieldMetadataItem[];
};

export const buildRecordFromImportedStructuredRow = ({
  fields,
  importedStructuredRow,
}: BuildRecordFromImportedStructuredRowArgs) => {
  const stringArrayJSONSchema = z
    .preprocess((value) => {
      try {
        if (typeof value !== 'string') {
          return [];
        }
        return JSON.parse(value);
      } catch {
        return [];
      }
    }, z.array(z.string()))
    .catch([]);

  const linkArrayJSONSchema = z
    .preprocess(
      (value) => {
        try {
          if (typeof value !== 'string') {
            return [];
          }
          return JSON.parse(value);
        } catch {
          return [];
        }
      },
      z.array(
        z.object({
          label: z.string().nullable(),
          url: z.string().nullable(),
        }),
      ),
    )
    .catch([]);

  const phoneArrayJSONSchema = z
    .preprocess(
      (value) => {
        try {
          if (typeof value !== 'string') {
            return [];
          }
          return JSON.parse(value);
        } catch {
          return [];
        }
      },
      z.array(
        z.object({
          number: z.string(),
          callingCode: z.string(),
          countryCode: z.string(),
        }),
      ),
    )
    .catch([]);

  const recordToBuild: Record<string, any> = {};

  const {
    ADDRESS: {
      addressCity: addressCityLabel,
      addressCountry: addressCountryLabel,
      addressPostcode: addressPostcodeLabel,
      addressState: addressStateLabel,
      addressStreet1: addressStreet1Label,
      addressStreet2: addressStreet2Label,
    },
    CURRENCY: {
      amountMicros: amountMicrosLabel,
      currencyCode: currencyCodeLabel,
    },
    FULL_NAME: { firstName: firstNameLabel, lastName: lastNameLabel },
    LINKS: {
      primaryLinkUrl: primaryLinkUrlLabel,
      primaryLinkLabel: primaryLinkLabelLabel,
      secondaryLinks: secondaryLinksLabel,
    },
    EMAILS: {
      primaryEmail: primaryEmailLabel,
      additionalEmails: additionalEmailsLabel,
    },
    PHONES: {
      primaryPhoneNumber: primaryPhoneNumberLabel,
      primaryPhoneCountryCode: primaryPhoneCountryCodeLabel,
      primaryPhoneCallingCode: primaryPhoneCallingCodeLabel,
      additionalPhones: additionalPhonesLabel,
    },
    RICH_TEXT_V2: { blocknote: blocknoteLabel, markdown: markdownLabel },
  } = COMPOSITE_FIELD_SUB_FIELD_LABELS;

  for (const field of fields) {
    const importedFieldValue = importedStructuredRow[field.name];

    switch (field.type) {
      case FieldMetadataType.BOOLEAN:
        recordToBuild[field.name] =
          importedFieldValue === 'true' || importedFieldValue === true;
        break;
      case FieldMetadataType.NUMBER:
      case FieldMetadataType.NUMERIC:
        recordToBuild[field.name] = Number(importedFieldValue);
        break;
      case FieldMetadataType.CURRENCY:
        if (
          isDefined(
            importedStructuredRow[`${amountMicrosLabel} (${field.name})`],
          ) ||
          isDefined(
            importedStructuredRow[`${currencyCodeLabel} (${field.name})`],
          )
        ) {
          recordToBuild[field.name] = {
            amountMicros: convertCurrencyAmountToCurrencyMicros(
              Number(
                importedStructuredRow[`${amountMicrosLabel} (${field.name})`],
              ),
            ),
            currencyCode:
              importedStructuredRow[`${currencyCodeLabel} (${field.name})`] ||
              'USD',
          };
        }
        break;
      case FieldMetadataType.ADDRESS: {
        if (
          isDefined(
            importedStructuredRow[`${addressStreet1Label} (${field.name})`] ||
              importedStructuredRow[`${addressStreet2Label} (${field.name})`] ||
              importedStructuredRow[`${addressCityLabel} (${field.name})`] ||
              importedStructuredRow[
                `${addressPostcodeLabel} (${field.name})`
              ] ||
              importedStructuredRow[`${addressStateLabel} (${field.name})`] ||
              importedStructuredRow[`${addressCountryLabel} (${field.name})`],
          )
        ) {
          recordToBuild[field.name] = {
            addressStreet1: castToString(
              importedStructuredRow[`${addressStreet1Label} (${field.name})`],
            ),
            addressStreet2: castToString(
              importedStructuredRow[`${addressStreet2Label} (${field.name})`],
            ),
            addressCity: castToString(
              importedStructuredRow[`${addressCityLabel} (${field.name})`],
            ),
            addressPostcode: castToString(
              importedStructuredRow[`${addressPostcodeLabel} (${field.name})`],
            ),
            addressState: castToString(
              importedStructuredRow[`${addressStateLabel} (${field.name})`],
            ),
            addressCountry: castToString(
              importedStructuredRow[`${addressCountryLabel} (${field.name})`],
            ),
          } satisfies Partial<FieldAddressValue>;
        }
        break;
      }
      case FieldMetadataType.LINKS: {
        if (
          isDefined(
            importedStructuredRow[`${primaryLinkUrlLabel} (${field.name})`] ||
              importedStructuredRow[
                `${primaryLinkLabelLabel} (${field.name})`
              ] ||
              importedStructuredRow[`${secondaryLinksLabel} (${field.name})`],
          )
        ) {
          recordToBuild[field.name] = {
            primaryLinkLabel: castToString(
              importedStructuredRow[`${primaryLinkLabelLabel} (${field.name})`],
            ),
            primaryLinkUrl: castToString(
              importedStructuredRow[`${primaryLinkUrlLabel} (${field.name})`],
            ),
            secondaryLinks: linkArrayJSONSchema.parse(
              importedStructuredRow[`${secondaryLinksLabel} (${field.name})`],
            ),
          } satisfies FieldLinksValue;
        }
        break;
      }
      case FieldMetadataType.PHONES: {
        if (
          isDefined(
            importedStructuredRow[
              `${primaryPhoneCountryCodeLabel} (${field.name})`
            ] ||
              importedStructuredRow[
                `${primaryPhoneNumberLabel} (${field.name})`
              ] ||
              importedStructuredRow[
                `${primaryPhoneCallingCodeLabel} (${field.name})`
              ] ||
              importedStructuredRow[`${additionalPhonesLabel} (${field.name})`],
          )
        ) {
          recordToBuild[field.name] = {
            primaryPhoneCountryCode: castToString(
              importedStructuredRow[
                `${primaryPhoneCountryCodeLabel} (${field.name})`
              ],
            ),
            primaryPhoneNumber: castToString(
              importedStructuredRow[
                `${primaryPhoneNumberLabel} (${field.name})`
              ],
            ),
            primaryPhoneCallingCode: castToString(
              importedStructuredRow[
                `${primaryPhoneCallingCodeLabel} (${field.name})`
              ],
            ),
            additionalPhones: phoneArrayJSONSchema.parse(
              importedStructuredRow[`${additionalPhonesLabel} (${field.name})`],
            ),
          } satisfies FieldPhonesValue;
        }
        break;
      }
      case FieldMetadataType.RICH_TEXT_V2: {
        if (
          isDefined(
            importedStructuredRow[`${blocknoteLabel} (${field.name})`] ||
              importedStructuredRow[`${markdownLabel} (${field.name})`],
          )
        ) {
          recordToBuild[field.name] = {
            blocknote: castToString(
              importedStructuredRow[`${blocknoteLabel} (${field.name})`],
            ),
            markdown: castToString(
              importedStructuredRow[`${markdownLabel} (${field.name})`],
            ),
          } satisfies FieldRichTextV2Value;
        }
        break;
      }
      case FieldMetadataType.EMAILS: {
        if (
          isDefined(
            importedStructuredRow[`${primaryEmailLabel} (${field.name})`],
          ) ||
          isDefined(
            importedStructuredRow[`${additionalEmailsLabel} (${field.name})`],
          )
        ) {
          recordToBuild[field.name] = {
            primaryEmail: castToString(
              importedStructuredRow[`${primaryEmailLabel} (${field.name})`],
            ),
            additionalEmails: stringArrayJSONSchema.parse(
              importedStructuredRow[`${additionalEmailsLabel} (${field.name})`],
            ),
          } satisfies FieldEmailsValue;
        }
        break;
      }
      case FieldMetadataType.UUID:
        if (
          isDefined(importedFieldValue) &&
          isNonEmptyString(importedFieldValue)
        ) {
          recordToBuild[field.name] = importedFieldValue;
        }
        break;
      case FieldMetadataType.RELATION:
        if (
          isDefined(importedFieldValue) &&
          isNonEmptyString(importedFieldValue)
        ) {
          recordToBuild[field.name + 'Id'] = importedFieldValue;
        }
        break;
      case FieldMetadataType.FULL_NAME:
        if (
          isDefined(
            importedStructuredRow[`${firstNameLabel} (${field.name})`] ??
              importedStructuredRow[`${lastNameLabel} (${field.name})`],
          )
        ) {
          recordToBuild[field.name] = {
            firstName:
              importedStructuredRow[`${firstNameLabel} (${field.name})`] ?? '',
            lastName:
              importedStructuredRow[`${lastNameLabel} (${field.name})`] ?? '',
          };
        }
        break;
      case FieldMetadataType.ACTOR:
        recordToBuild[field.name] = {
          source: 'IMPORT',
          context: {},
        } satisfies FieldActorForInputValue;
        break;
      case FieldMetadataType.ARRAY:
      case FieldMetadataType.MULTI_SELECT: {
        recordToBuild[field.name] =
          stringArrayJSONSchema.parse(importedFieldValue);
        break;
      }
      case FieldMetadataType.RAW_JSON: {
        if (typeof importedFieldValue === 'string') {
          try {
            recordToBuild[field.name] = JSON.parse(importedFieldValue);
          } catch {
            break;
          }
        }
        break;
      }
      default:
        recordToBuild[field.name] = importedFieldValue;
        break;
    }
  }

  return recordToBuild;
};
