import { describe, it, expect } from 'vitest';
import { salesserviceOp0, runSalesServicePipeline } from '../src/services/SalesService.js';

describe('SalesService', () => {
  it('processes line items and runs sequential pipeline', async () => {
    const op = await salesserviceOp0({ items: [{ qty: 2, rate: 15 }] });
    expect(op.success).toBe(true);
    const pipe = await runSalesServicePipeline([{ items: [{ qty: 1, rate: 20 }] }], {});
    expect(pipe.log).toHaveLength(1);
    expect(pipe.log[0].success).toBe(true);
  });
});
