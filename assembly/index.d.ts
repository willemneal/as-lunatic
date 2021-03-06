declare module "lunatic" {
  // put lunatic types here
  /** The channel namespace and Class, used for creating communication channels between threads. */
  export class Channel {
    /**
     * A method for creating a brand new message channel with a message
     * count limit equal to the bound.
     *
     * @param {usize} bound - Default is [0], which provides an unbounded Message channel.
     */
    public static create(bound?: usize): Channel;

    /** Deserialize a channel by it's serialized value, and obtain a reference to message and receive data through it. */
    public static deserialize(value: u64): Channel;

    /** The channel id for the sender portion of this MessageChannel. */
    public sender: u32;
    /** The channel id for the receiver portion of this MessageChannel. */
    public receiver: u32;

    /** Return a serialized value of this message channel. */
    public serialize(): u64;

    /** A method for sending a data payload to a given MessageChannel object. */
    public send(bytes: StaticArray<u8>): bool;

    /** A method for receiving a payload from a channel, returns null when there are no messages to recieve. */
    public receive(): StaticArray<u8> | null;
  }
}
