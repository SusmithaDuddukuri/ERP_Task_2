import { describe, it, expect } from 'vitest';
import { manufacturingserviceOp0, runManufacturingServicePipeline } from '../src/services/ManufacturingService.js';

describe('ManufacturingService', () => {
  it('processes line items and runs sequential pipeline', async () => {
    const op = await manufacturingserviceOp0({ items: [{ qty: 2, rate: 15 }] });
    expect(op.success).toBe(true);
    const pipe = await runManufacturingServicePipeline([{ items: [{ qty: 1, rate: 20 }] }], {});
    expect(pipe.log).toHaveLength(1);
    expect(pipe.log[0].success).toBe(true);
  });
});
