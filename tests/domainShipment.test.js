import { describe, it, expect } from 'vitest';
import { createShipment0, validateShipment0, deriveShipment0, validateShipmentBatch } from '../src/domain/shipment.js';

describe('shipment domain', () => {
  it('creates and validates a Shipment record', () => {
    const record = createShipment0({ name: 'Sample Shipment' });
    expect(record.id).toBeTruthy();
    expect(validateShipment0(record).valid).toBe(true);
    expect(validateShipment0(null).valid).toBe(false);
  });

  it('derives availability metrics and validates batches', () => {
    const record = createShipment0({ qty: 10, reserved: 2, unitCost: 5 });
    const derived = deriveShipment0(record);
    expect(derived.available).toBe(8);
    expect(derived.extendedValue).toBe(40);
    const batch = validateShipmentBatch([record, { name: '' }]);
    expect(batch.total).toBe(2);
    expect(batch.invalid).toBe(1);
  });
});
